import { RequestError } from "@octokit/request-error"
import webhooks from "@octokit/webhooks"
import * as probot from "probot"
import { applyPrettierConfigOverrides } from "./prettier/apply-prettier-config-overrides"
import { createCommit } from "./github/create-commit"
import { createPullRequest } from "./github/create-pull-request"
import { renderTemplate } from "./template/render-template"
import { prettify } from "./prettier/prettify"
import { addComment } from "./github/add-comment"
import { hasCommentFromPrettifier } from "./github/has-comment-from-prettifier"
import { LoggedError } from "./logging/logged-error"
import { loadFile } from "./github/load-file"
import { DevError, logDevError } from "./logging/dev-error"
import { concatToSet, removeAllFromSet } from "./helpers/set-tools"
import { loadPushContextData, PushContextData } from "./github/load-push-context-data"
import { UserError, logUserError } from "./logging/user-error"
import * as prettier from "prettier"
import { PrettifierConfiguration } from "./config/prettifier-configuration"
import { getPrettierConfig } from "./prettier/config"

/** called when this bot gets notified about a push on Github */
export async function onPush(context: probot.Context<webhooks.EventPayloads.WebhookPayloadPush>): Promise<void> {
  let org = ""
  let repo = ""
  let branch = ""
  let author = ""
  let commitSha = ""
  let pullRequestNumber = 0
  let pullRequestId = ""
  let prettierConfig: prettier.Options = {}
  let prettifierConfig: PrettifierConfiguration = new PrettifierConfiguration({}, "")
  let prettierIgnore = ""
  const changedFiles = new Set<string>()
  const prettifiedFiles = []
  let currentFile = ""
  let prettierConfigForFile: prettier.Options = {}
  try {
    org = context.payload.repository.owner.login
    repo = context.payload.repository.name
    branch = context.payload.ref.replace("refs/heads/", "")
    author = context.payload.pusher.name
    commitSha = context.payload.after.substring(0, 7)
    const repoPrefix = `${org}/${repo}|${branch}|${commitSha}`

    // ignore deleted branches
    if (commitSha === "0000000") {
      console.log(`${repoPrefix}: IGNORING BRANCH DELETION`)
      return
    }

    // log push detected
    console.log(`${repoPrefix}: PUSH DETECTED`)

    // ignore commits by Prettifier
    if (author === "prettifier[bot]") {
      console.log(`${repoPrefix}: IGNORING COMMIT BY PRETTIFIER`)
      return
    }

    // load additional information from GitHub
    let pushContextData: PushContextData
    try {
      pushContextData = await loadPushContextData(org, repo, branch, context.github)
    } catch (e) {
      // can't load push context for some reason, like missing permissions --> abort
      console.log(`${repoPrefix}: CAN'T LOAD PUSH CONTEXT:`, e)
      return
    }
    pullRequestNumber = pushContextData.pullRequestNumber
    pullRequestId = pushContextData.pullRequestId
    prettierIgnore = pushContextData.prettierIgnore
    prettifierConfig = PrettifierConfiguration.fromYML(pushContextData.prettifierConfig, prettierIgnore)
    console.log(`${repoPrefix}: BOT CONFIG: ${JSON.stringify(prettifierConfig)}`)
    prettierConfig = getPrettierConfig(pushContextData)
    console.log(`${repoPrefix}: PRETTIER CONFIG: ${JSON.stringify(prettierConfig)}`)

    // check whether this branch should be ignored
    if (prettifierConfig.shouldIgnoreBranch(branch)) {
      console.log(`${repoPrefix}: IGNORING THIS BRANCH PER BOT CONFIG`)
      return
    }

    // check pull requests
    if (prettifierConfig.pullsOnly) {
      if (pullRequestNumber === 0) {
        console.log(`${repoPrefix}: IGNORING THIS BRANCH BECAUSE IT HAS NO OPEN PULL REQUEST`)
        return
      }
      console.log(`${repoPrefix}: THIS BRANCH HAS PULL REQUEST #${pullRequestNumber}`)
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
        allowed = await prettifierConfig.shouldPrettify(currentFile)
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
        fileContent = await loadFile(org, repo, branch, currentFile, context.github)
      } catch (e) {
        if (e instanceof RequestError) {
          const requestError = e as RequestError
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
      prettierConfigForFile = applyPrettierConfigOverrides(prettierConfig, currentFile)
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
        branch,
        github: context.github,
        files: prettifiedFiles,
        message: renderTemplate(await prettifierConfig.commitMessage(), {
          commitSha,
          files: prettifiedFiles.map(f => f.path),
        }),
        org,
        repo,
      })
      console.log(`${repoPrefix}: COMMITTED ${prettifiedFiles.length} PRETTIFIED FILES`)
    } catch (e) {
      // this error gets logged below where it is handled
      createCommitError = e
    }

    if (!createCommitError && prettifierConfig.commentTemplate !== "") {
      if (pullRequestId !== "") {
        const hasComment = await hasCommentFromPrettifier(org, repo, pullRequestNumber, context.github)
        if (!hasComment) {
          addComment(
            pullRequestId,
            renderTemplate(prettifierConfig.commentTemplate, {
              commitSha,
              files: prettifiedFiles.map(f => f.path),
            }),
            context.github
          )
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
      body: "Formats recently committed files. No content changes.",
      branch: `prettifier-${commitSha}`,
      github: context.github,
      files: prettifiedFiles,
      message: renderTemplate(await prettifierConfig.commitMessage(), {
        commitSha,
        files: prettifiedFiles.map(f => f.path),
      }),
      org,
      parentBranch: "master",
      repo,
    })
    console.log(`${repoPrefix}: CREATED PULL REQUEST FOR ${prettifiedFiles.length} PRETTIFIED FILES`)
  } catch (e) {
    if (e instanceof LoggedError) {
      return
    }
    const errorContext = {
      event: "on-pull-request",
      org,
      repo,
      branch,
      pullRequestId,
      pullRequestNumber,
      payload: context.payload,
      prettierConfig,
      prettifierConfig,
      prettierIgnore,
      changedFiles,
      prettifiedFiles,
      currentFile,
      prettierConfigForFile,
    }
    if (e instanceof DevError) {
      e.enrich(errorContext)
      logDevError(e)
      return
    }
    if (e instanceof UserError) {
      e.enrich(errorContext)
      logUserError(e, context.github)
      return
    }
    logDevError(e)
  }
}
