import { RequestError } from "@octokit/request-error"
import webhooks from "@octokit/webhooks"
import * as prettier from "prettier"
import * as probot from "probot"
import { ProbotOctokit } from "probot"

import { PrettifierConfiguration } from "./config/prettifier-configuration"
import { addComment } from "./github/add-comment"
import { createCommit } from "./github/create-commit"
import { createPullRequest } from "./github/create-pull-request"
import { hasCommentFromPrettifier } from "./github/has-comment-from-prettifier"
import { loadFile } from "./github/load-file"
import { loadPushContextData, PushContextData } from "./github/load-push-context-data"
import { concatToSet, removeAllFromSet } from "./helpers/set-tools"
import { DevError, logDevError } from "./logging/dev-error"
import { LoggedError } from "./logging/logged-error"
import { logUserError, UserError } from "./logging/user-error"
import { applyPrettierConfigOverrides } from "./prettier/apply-prettier-config-overrides"
import { getPrettierConfig } from "./prettier/config"
import { prettify } from "./prettier/prettify"
import { renderTemplate } from "./template/render-template"

interface PushState {
  author: string
  branch: string
  commitSha: string
  github: InstanceType<typeof ProbotOctokit>
  org: string
  prettierConfig: prettier.Options
  prettierIgnore: string
  prettifierConfig: PrettifierConfiguration
  pullRequestId: string
  pullRequestNumber: number
  repo: string
}

/** called when this bot gets notified about a push on Github */
export async function onPush(context: probot.Context<webhooks.EventPayloads.WebhookPayloadPush>): Promise<void> {
  const state: PushState = {
    org: "",
    repo: "",
    branch: "",
    author: "",
    commitSha: "",
    pullRequestNumber: 0,
    pullRequestId: "",
    prettierConfig: {},
    prettifierConfig: new PrettifierConfiguration({}, ""),
    prettierIgnore: "",
    github: context.github,
  }
  const changedFiles = new Set<string>()
  const prettifiedFiles = []
  let currentFile = ""
  let prettierConfigForFile: prettier.Options = {}
  try {
    state.org = context.payload.repository.owner.login
    state.repo = context.payload.repository.name
    state.branch = context.payload.ref.replace("refs/heads/", "")
    state.author = context.payload.pusher.name
    state.commitSha = context.payload.after.substring(0, 7)
    const repoPrefix = `${state.org}/${state.repo}|${state.branch}|${state.commitSha}`

    // ignore deleted branches
    if (state.commitSha === "0000000") {
      console.log(`${repoPrefix}: IGNORING BRANCH DELETION`)
      return
    }

    // log push detected
    console.log(`${repoPrefix}: PUSH DETECTED`)

    // ignore commits by Prettifier
    if (state.author === "prettifier[bot]") {
      console.log(`${repoPrefix}: IGNORING COMMIT BY PRETTIFIER`)
      return
    }

    // load additional information from GitHub
    let pushContextData: PushContextData
    try {
      pushContextData = await loadPushContextData(state)
    } catch (e) {
      // can't load push context for some reason, like missing permissions --> abort
      console.log(`${repoPrefix}: CAN'T LOAD PUSH CONTEXT:`, e)
      return
    }
    state.pullRequestNumber = pushContextData.pullRequestNumber
    state.pullRequestId = pushContextData.pullRequestId
    state.prettierIgnore = pushContextData.prettierIgnore
    state.prettifierConfig = PrettifierConfiguration.fromYML(pushContextData.prettifierConfig, state.prettierIgnore)
    console.log(`${repoPrefix}: BOT CONFIG: ${JSON.stringify(state.prettifierConfig)}`)
    state.prettierConfig = getPrettierConfig(pushContextData)
    console.log(`${repoPrefix}: PRETTIER CONFIG: ${JSON.stringify(state.prettierConfig)}`)

    // check whether this branch should be ignored
    if (state.prettifierConfig.shouldIgnoreBranch(state.branch)) {
      console.log(`${repoPrefix}: IGNORING THIS BRANCH PER BOT CONFIG`)
      return
    }

    // check pull requests
    if (state.prettifierConfig.pullsOnly) {
      if (state.pullRequestNumber === 0) {
        console.log(`${repoPrefix}: IGNORING THIS BRANCH BECAUSE IT HAS NO OPEN PULL REQUEST`)
        return
      }
      console.log(`${repoPrefix}: THIS BRANCH HAS PULL REQUEST #${state.pullRequestNumber}`)
    }

    // find all changed files
    for (const commit of context.payload.commits) {
      concatToSet(changedFiles, commit.added)
      concatToSet(changedFiles, commit.modified)
      removeAllFromSet(changedFiles, commit.removed)
    }

    // prettify all changed files
    let i = 0
    for (currentFile of changedFiles) {
      i++
      const filePrefix = `${repoPrefix}: FILE ${i}/${changedFiles.size} (${currentFile})`

      // ignore non-prettifiable files
      let allowed = false
      try {
        allowed = await state.prettifierConfig.shouldPrettify(currentFile)
      } catch (e) {
        if (e instanceof LoggedError) {
          continue
        }
        throw e
      }
      if (!allowed) {
        console.log(`${filePrefix} - NOT PRETTIFYABLE OR IGNORED`)
        continue
      }

      // load the file content
      let fileContent = ""
      try {
        fileContent = await loadFile({ ...state, filePath: currentFile })
      } catch (e) {
        if (e instanceof RequestError) {
          const requestError = e
          if (requestError.status === 403) {
            // file exists but the server refused to serve the file --> ignore
            continue
          }
          if (requestError.status === 404) {
            // file no longer exists, probably because the branch was deleted --> ignore
            continue
          }
        }
        throw e
      }

      // prettify the file
      prettierConfigForFile = applyPrettierConfigOverrides(state.prettierConfig, currentFile)
      const formatted = prettify(fileContent, currentFile, prettierConfigForFile)

      // ignore if there are no changes
      if (formatted === fileContent) {
        console.log(`${filePrefix} - ALREADY FORMATTED`)
        continue
      }

      // store the prettified content
      prettifiedFiles.push({ path: currentFile, content: formatted })
      console.log(`${filePrefix} - PRETTIFYING`)
    }

    if (prettifiedFiles.length === 0) {
      // no changed files --> nothing else to do here
      console.log(`${repoPrefix}: ALL FILES ALREADY FORMATTED`)
      return
    }

    // try creating a commit
    let createCommitError: Error | null = null
    try {
      await createCommit({
        ...state,
        files: prettifiedFiles,
        message: renderTemplate(await state.prettifierConfig.commitMessage(), {
          commitSha: state.commitSha,
          files: prettifiedFiles.map(f => f.path),
        }),
      })
      console.log(`${repoPrefix}: COMMITTED ${prettifiedFiles.length} PRETTIFIED FILES`)
    } catch (e) {
      // this error gets logged below where it is handled
      createCommitError = e
    }

    if (!createCommitError && state.prettifierConfig.commentTemplate !== "") {
      if (state.pullRequestId !== "") {
        const hasComment = await hasCommentFromPrettifier(state)
        if (!hasComment) {
          await addComment({
            ...state,
            issueId: state.pullRequestId,
            text: renderTemplate(state.prettifierConfig.commentTemplate, {
              commitSha: state.commitSha,
              files: prettifiedFiles.map(f => f.path),
            }),
          })
        } else {
          console.log(`${repoPrefix}: PULL REQUEST ALREADY HAS COMMENT, SKIPPING`)
        }
      }
    }

    if (!createCommitError) {
      return
    }

    // When reaching this, the pull request has failed.
    // Analyze the error to see if we should try creating a pull request.
    let tryPullRequest = false
    if (createCommitError instanceof RequestError) {
      if ([422, 403, 404].includes(createCommitError.status)) {
        tryPullRequest = true
      }
    }
    if (!tryPullRequest) {
      throw new DevError("committing changes", createCommitError)
    }

    // try creating a pull request
    await createPullRequest({
      ...state,
      body: "Formats recently committed files. No content changes.",
      branch: `prettifier-${state.commitSha}`,
      files: prettifiedFiles,
      message: renderTemplate(await state.prettifierConfig.commitMessage(), {
        commitSha: state.commitSha,
        files: prettifiedFiles.map(f => f.path),
      }),
      parentBranch: "master",
    })
    console.log(`${repoPrefix}: CREATED PULL REQUEST FOR ${prettifiedFiles.length} PRETTIFIED FILES`)
  } catch (e) {
    if (e instanceof LoggedError) {
      return
    }
    const errorContext = {
      ...state,
      event: "on-pull-request",
      payload: context.payload,
      changedFiles,
      prettifiedFiles,
      currentFile,
      prettierConfigForFile,
    }
    if (e instanceof DevError) {
      e.enrich(errorContext)
      await logDevError(e)
      return
    }
    if (e instanceof UserError) {
      e.enrich(errorContext)
      await logUserError(e, context.github)
      return
    }
    await logDevError(e)
  }
}
