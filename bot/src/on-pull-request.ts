import { RequestError } from "@octokit/request-error"
import webhooks from "@octokit/webhooks"
import * as probot from "probot"
import { ProbotOctokit } from "probot"

import { isConfigurationFile } from "./config/is-configuration-file"
import { PrettifierConfiguration } from "./config/prettifier-configuration"
import * as github from "./github"
import { DevError, logDevError } from "./logging/dev-error"
import { LoggedError } from "./logging/logged-error"
import { logUserError, UserError } from "./logging/user-error"
import * as prettier from "./prettier"
import * as templates from "./templates"

export interface PullRequestState {
  branch: string
  headOrg: string
  octokit: InstanceType<typeof ProbotOctokit>
  org: string
  prettierConfig: prettier.Options
  prettierIgnore: string
  prettifierConfig: PrettifierConfiguration
  pullRequestId: string
  pullRequestNumber: number
  pullRequestURL: string
  repo: string
}

/** called when this bot gets notified about a new pull request */
export async function onPullRequest(
  context: probot.Context<webhooks.EventPayloads.WebhookPayloadPullRequest>
): Promise<void> {
  let state: PullRequestState | undefined
  try {
    // NOTE: loading this inside the try block to log rich errors when there are issues parsing the GitHub payload
    state = {
      octokit: context.github,
      org: context.payload.repository.owner.login,
      headOrg: context.payload.pull_request.head.repo.owner.login,
      repo: context.payload.repository.name,
      branch: context.payload.pull_request.head.ref,
      pullRequestNumber: context.payload.pull_request.number,
      pullRequestId: context.payload.pull_request.node_id,
      pullRequestURL: context.payload.pull_request.html_url,
      prettierConfig: {},
      prettifierConfig: new PrettifierConfiguration({}, ""),
      prettierIgnore: "",
    }
    const repoPrefix = `${state.org}/${state.repo}|#${state.pullRequestNumber}`
    console.log(`${repoPrefix}: PULL REQUEST DETECTED`)

    if (context.payload.action !== "opened") {
      console.log(`${repoPrefix}: PULL REQUEST ACTION IS ${context.payload.action}, IGNORING`)
      return
    }

    // load additional information from GitHub
    state = await loadPullRequestContext(state)
    console.log(`${repoPrefix}: BOT CONFIG: ${JSON.stringify(state.prettifierConfig)}`)
    console.log(`${repoPrefix}: PRETTIER CONFIG: ${JSON.stringify(state.prettierConfig)}`)
    console.log(`${repoPrefix}: PRETTIER IGNORE: ${JSON.stringify(state.prettierIgnore)}`)

    // ignore this branch?
    if (state.prettifierConfig.shouldIgnoreBranch(state.branch)) {
      console.log(`${repoPrefix}: IGNORING THIS BRANCH PER BOT CONFIG`)
      return
    }

    // load changed files
    let changedFiles: string[]
    try {
      changedFiles = await github.getExistingFilesInPullRequests(state)
    } catch (e) {
      // can't load files of pull request for some reason --> abort
      console.log(`${repoPrefix}: CAN'T LOAD FILES OF PULL REQUEST:`, e)
      return
    }

    const prettifiedFiles = new prettier.Result()
    let configChange = false
    for (let i = 0; i < changedFiles.length; i++) {
      const filePath = changedFiles[i]
      if (isConfigurationFile(filePath)) {
        configChange = true
      }
      const filePrefix = `${repoPrefix}: FILE ${i + 1}/${changedFiles.length} (${filePath})`

      // ignore file?
      const prettifyable = await state.prettifierConfig.shouldPrettify(filePath)
      if (!prettifyable) {
        console.log(`${filePrefix} - NOT PRETTIFYABLE OR IGNORED`)
        continue
      }

      // load the file content
      let fileContent: string
      try {
        fileContent = await github.loadFile({ ...state, org: state.headOrg, filePath })
      } catch (e) {
        if (e instanceof RequestError) {
          if (e.status === 403) {
            // file exists but the server refused to serve the file --> ignore
            continue
          }
          if (e.status === 404) {
            // file no longer exists, probably because the branch was deleted --> ignore
            continue
          }
        }
        throw e
      }

      // prettify the file content
      const prettierConfigForFile = prettier.applyConfigOverrides(state.prettierConfig, filePath)
      const formatted = prettier.format(fileContent, filePath, prettierConfigForFile)

      // ignore if there are no changes
      if (formatted === fileContent) {
        console.log(`${filePrefix} - ALREADY FORMATTED`)
        continue
      }

      // store the prettified content
      prettifiedFiles.push({ path: filePath, old: fileContent, formatted })
      console.log(`${filePrefix} - PRETTIFYING`)
    }

    // verify correct config changes
    if (configChange) {
      await github.addComment({
        ...state,
        issueId: state.pullRequestId,
        text: "Prettifier-Bot here. The configuration changes made in this pull request look good to me.",
      })
      console.log(`${repoPrefix}: ADDED CONFIG CHANGE DEBUG COMMENT`)
    }

    if (prettifiedFiles.length === 0) {
      // no changed files --> nothing else to do here
      console.log(`${repoPrefix}: ALL ${changedFiles.length} FILES WERE ALREADY FORMATTED`)
      return
    }

    const isPullRequestFromFork = state.headOrg !== state.org
    if (isPullRequestFromFork) {
      await github.addComment({
        ...state,
        issueId: state.pullRequestId,
        text: templates.render(await state.prettifierConfig.prettificationNotification(), {
          files: prettifiedFiles.paths(),
        }),
      })
      console.log(`${repoPrefix}: COMMENTED ON PULL REQUEST FROM FORK`)
      return
    }

    // create a commit
    try {
      await github.createCommit({
        ...state,
        files: prettifiedFiles.map(f => {
          return { path: f.path, content: f.formatted }
        }),
        message: templates.render(await state.prettifierConfig.commitMessageTemplate(), {
          files: prettifiedFiles.map(f => f.path),
          commitSha: state.branch,
        }),
      })
      console.log(`${repoPrefix}: COMMITTED ${prettifiedFiles.length} PRETTIFIED FILES`)
    } catch (e) {
      if (e instanceof RequestError) {
        if (e.status === 422) {
          if (e.message.includes("Required status check")) {
            // pull request of a protected branch
            return
          }
          if (e.message === "Update is not a fast forward") {
            // Somebody else committed at the same time.
            // This happens when pushing and creating a pull request at the same time.
            // Stop here since the "push" handler for those fixes will redo our changes.
            return
          }
        }
        if (e.status === 403) {
          if (e.message.includes("Resource not accessible by integration")) {
            // nothing we can do here
            // TODO: send error to user asking to update permissions?
            return
          }
          if (e.message.includes("The requested blob is too large to fetch via the API")) {
            console.log(`${repoPrefix}: COMMIT IS TOO LARGE`)
            return
          }
        }
        if (e.status === 404) {
          // branch was deleted --> ignore
          return
        }
      }
      throw new DevError("creating a commit on a freshly opened pull request", e)
    }

    // add community comment
    if (state.prettifierConfig.commentTemplate !== "") {
      await github.addComment({ ...state, issueId: state.pullRequestId, text: state.prettifierConfig.commentTemplate })
      console.log(`${repoPrefix}: ADDED COMMUNITY COMMENT`)
    }
  } catch (e) {
    if (e instanceof LoggedError) {
      return
    }
    const errorContext = {
      ...state,
      event: "on-pull-request",
      payload: context.payload,
    }
    if (e instanceof UserError) {
      e.enrich(errorContext)
      await logUserError(e, context.github)
      return
    }
    if (e instanceof DevError) {
      e.enrich(errorContext)
      await logDevError(e)
      return
    }
    await logDevError(new DevError("unknown dev error", e, errorContext))
  }
}

async function loadPullRequestContext(state: PullRequestState): Promise<PullRequestState> {
  const pullRequestContextData = await github.loadPullRequestContextData(state)
  state.prettifierConfig = PrettifierConfiguration.fromYML(
    pullRequestContextData.prettifierConfig,
    pullRequestContextData.prettierIgnore
  )
  state.prettierConfig = prettier.loadConfig(pullRequestContextData)
  state.prettierIgnore = pullRequestContextData.prettierIgnore
  return state
}
