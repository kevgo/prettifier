import { RequestError } from "@octokit/request-error"
import webhooks from "@octokit/webhooks"
import * as probot from "probot"
import { ProbotOctokit } from "probot"

import * as config from "./config"
import * as github from "./github"
import { concatToSet, removeAllFromSet } from "./helpers/set-tools"
import { DevError, logDevError } from "./logging/dev-error"
import { LoggedError } from "./logging/logged-error"
import { logUserError, UserError } from "./logging/user-error"
import * as prettier from "./prettier"

interface PushState {
  readonly author: string
  readonly branch: string
  readonly commitSha: string
  readonly octokit: InstanceType<typeof ProbotOctokit>
  readonly org: string
  prettierConfig: prettier.Options
  prettierIgnore: string
  prettifierConfig: config.Data
  pullRequestId: string
  pullRequestNumber: number
  readonly repo: string
}

/** called when this bot gets notified about a push on Github */
export async function onPush(context: probot.Context<webhooks.EventPayloads.WebhookPayloadPush>): Promise<void> {
  let state: PushState | undefined
  let changedFiles: Set<string> | undefined
  const prettifiedFiles = new prettier.Result()
  let currentFile = ""
  let prettierConfigForFile: prettier.Options = {}
  try {
    // NOTE: loading this inside the try block to log rich errors when the payload changes
    state = {
      author: context.payload.pusher.name,
      branch: context.payload.ref.replace("refs/heads/", ""),
      commitSha: context.payload.after.substring(0, 7),
      octokit: context.github,
      org: context.payload.repository.owner.login,
      prettierConfig: {},
      prettierIgnore: "",
      prettifierConfig: config.defaultValues(),
      pullRequestId: "",
      pullRequestNumber: 0,
      repo: context.payload.repository.name,
    }
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
    try {
      state = await loadPushContext(state)
    } catch (e) {
      console.log(`${repoPrefix}: CAN'T LOAD PUSH CONTEXT:`, e)
      return
    }
    console.log(`${repoPrefix}: BOT CONFIG: ${JSON.stringify(state.prettifierConfig)}`)
    console.log(`${repoPrefix}: PRETTIER CONFIG: ${JSON.stringify(state.prettierConfig)}`)
    const configReader = new config.Reader(state.prettifierConfig, state.prettierIgnore)

    // ignore this branch?
    if (configReader.shouldIgnoreBranch(state.branch)) {
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

    // prettify all changed files
    changedFiles = findChangedFiles(context.payload.commits)
    let i = 0
    for (currentFile of changedFiles) {
      i++
      const filePrefix = `${repoPrefix}: FILE ${i}/${changedFiles.size} (${currentFile})`

      // ignore file?
      const prettifiable = await configReader.shouldPrettify(currentFile)
      if (!prettifiable) {
        console.log(`${filePrefix} - NOT PRETTIFYABLE OR IGNORED`)
        continue
      }

      // load the file content
      try {
        var fileContent = await github.loadFile({ ...state, filePath: currentFile })
      } catch (e) {
        if (e instanceof RequestError) {
          if (e.status === 403) {
            // file exists but the server refused to serve the file --> ignore
            continue
          }
          if (e.status === 404) {
            // file no longer exists --> branch was deleted --> ignore
            continue
          }
        }
        throw e
      }

      // prettify the file
      prettierConfigForFile = prettier.applyConfigOverrides(state.prettierConfig, currentFile)
      const formatted = prettier.format(fileContent, currentFile, prettierConfigForFile)

      // ignore if there are no changes
      if (formatted === fileContent) {
        console.log(`${filePrefix} - ALREADY FORMATTED`)
        continue
      }

      // store the prettified content
      prettifiedFiles.push({ path: currentFile, formatted, old: fileContent })
      console.log(`${filePrefix} - PRETTIFYING`)
    }

    if (prettifiedFiles.length === 0) {
      // no changed files --> nothing else to do here
      console.log(`${repoPrefix}: ALL FILES ALREADY FORMATTED`)
      return
    }

    // try creating a commit
    let createCommitError: Error | undefined
    const message = configReader.commitMessageText({ commitSha: state.commitSha, files: prettifiedFiles.paths() })
    try {
      await github.createCommit({
        ...state,
        files: prettifiedFiles.formattedFiles(),
        message,
      })
      console.log(`${repoPrefix}: COMMITTED ${prettifiedFiles.length} PRETTIFIED FILES`)
    } catch (e) {
      // this error gets logged below where it is handled
      createCommitError = e
    }

    // create pull request comment
    if (state.pullRequestId !== "" && !createCommitError && state.prettifierConfig.commentTemplate !== "") {
      const hasComment = await github.hasCommentFromPrettifier(state)
      if (hasComment) {
        console.log(`${repoPrefix}: PULL REQUEST ALREADY HAS COMMENT, SKIPPING`)
      } else {
        await github.addComment(context.github, {
          ...state,
          issueId: state.pullRequestId,
          text: configReader.commentText({ files: prettifiedFiles.paths() }),
        })
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
    await github.createPullRequest({
      ...state,
      body: "Formats recently committed files. No content changes.",
      branch: `prettifier-${state.commitSha}`,
      files: prettifiedFiles.formattedFiles(),
      message: configReader.commitMessageText({
        commitSha: state.commitSha,
        files: prettifiedFiles.paths(),
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

    await logDevError(new DevError("unknown dev error", e, errorContext))
  }
}

/** provides an updated state with additional Push context data loaded from GitHub */
async function loadPushContext(state: PushState): Promise<PushState> {
  const pushContextData = await github.loadPushContextData(state.octokit, state)
  state.pullRequestNumber = pushContextData.pullRequestNumber
  state.pullRequestId = pushContextData.pullRequestId
  state.prettierIgnore = pushContextData.prettierIgnore
  state.prettifierConfig = config.parseYML(pushContextData.prettifierConfig)
  state.prettierConfig = prettier.loadConfig(pushContextData)
  return state
}

function findChangedFiles(commits: any[]): Set<string> {
  const result = new Set<string>()
  for (const commit of commits) {
    concatToSet(result, commit.added)
    concatToSet(result, commit.modified)
    removeAllFromSet(result, commit.removed)
  }
  return result
}
