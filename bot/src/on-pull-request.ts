import { RequestError } from "@octokit/request-error"
import webhooks from "@octokit/webhooks"
import * as prettier from "prettier"
import * as probot from "probot"
import { ProbotOctokit } from "probot"

import { isConfigurationFile } from "./config/is-configuration-file"
import { PrettifierConfiguration } from "./config/prettifier-configuration"
import { addComment } from "./github/add-comment"
import { createCommit } from "./github/create-commit"
import { getExistingFilesInPullRequests } from "./github/get-existing-files-in-pull-request"
import { loadFile } from "./github/load-file"
import { loadPullRequestContextData } from "./github/load-pull-request-context-data"
import { DevError, logDevError } from "./logging/dev-error"
import { LoggedError } from "./logging/logged-error"
import { logUserError, UserError } from "./logging/user-error"
import { applyPrettierConfigOverrides } from "./prettier/apply-prettier-config-overrides"
import { getPrettierConfig } from "./prettier/config"
import { prettify } from "./prettier/prettify"
import { renderTemplate } from "./template/render-template"

export interface PullRequestState {
  branch: string
  github: InstanceType<typeof ProbotOctokit>
  headOrg: string
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
  const state: PullRequestState = {
    github: context.github,
    org: "",
    headOrg: "",
    repo: "",
    branch: "",
    pullRequestNumber: 0,
    pullRequestId: "",
    pullRequestURL: "",
    prettierConfig: {},
    prettifierConfig: new PrettifierConfiguration({}, ""),
    prettierIgnore: "",
  }
  try {
    // NOTE: loading this inside the try block to log rich errors when the payload changes
    state.org = context.payload.repository.owner.login
    state.headOrg = context.payload.pull_request.head.repo.owner.login
    state.repo = context.payload.repository.name
    state.branch = context.payload.pull_request.head.ref
    state.pullRequestNumber = context.payload.pull_request.number
    state.pullRequestId = context.payload.pull_request.node_id
    state.pullRequestURL = context.payload.pull_request.html_url
    const repoPrefix = `${state.org}/${state.repo}|#${state.pullRequestNumber}`
    console.log(`${repoPrefix}: PULL REQUEST DETECTED`)

    if (context.payload.action !== "opened") {
      console.log(`${repoPrefix}: PULL REQUEST ACTION IS ${context.payload.action}, IGNORING`)
      return
    }

    // load additional information from GitHub
    const pullRequestContextData = await loadPullRequestContextData(state)
    state.prettifierConfig = PrettifierConfiguration.fromYML(
      pullRequestContextData.prettifierConfig,
      pullRequestContextData.prettierIgnore
    )
    console.log(`${repoPrefix}: BOT CONFIG: ${JSON.stringify(state.prettifierConfig)}`)
    state.prettierConfig = getPrettierConfig(pullRequestContextData)
    console.log(`${repoPrefix}: PRETTIER CONFIG: ${JSON.stringify(state.prettierConfig)}`)
    state.prettierIgnore = pullRequestContextData.prettierIgnore
    console.log(`${repoPrefix}: PRETTIER IGNORE: ${JSON.stringify(state.prettierIgnore)}`)

    // check whether this branch should be ignored
    if (state.prettifierConfig.shouldIgnoreBranch(state.branch)) {
      console.log(`${repoPrefix}: IGNORING THIS BRANCH PER BOT CONFIG`)
      return
    }

    // load the files that this PR changes
    let files: string[] = []
    try {
      files = await getExistingFilesInPullRequests(state)
    } catch (e) {
      // can't load files of pull request for some reason --> abort
      console.log(`${repoPrefix}: CAN'T LOAD FILES OF PULL REQUEST:`, e)
      return
    }
    const prettifiedFiles = []
    let configChange = false
    for (let i = 0; i < files.length; i++) {
      const filePath = files[i]
      if (isConfigurationFile(filePath)) {
        configChange = true
      }
      const filePrefix = `${repoPrefix}: FILE ${i + 1}/${files.length} (${filePath})`
      // ignore files that shouldn't be prettified
      const shouldPrettify = await state.prettifierConfig.shouldPrettify(filePath)
      if (!shouldPrettify) {
        console.log(`${filePrefix} - IGNORING`)
        continue
      }

      // load the file content
      let fileContent = ""
      try {
        fileContent = await loadFile({ ...state, org: state.headOrg, filePath })
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
      const prettierConfigForFile = applyPrettierConfigOverrides(state.prettierConfig, filePath)
      const formatted = prettify(fileContent, filePath, prettierConfigForFile)

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
      await addComment({
        ...state,
        issueId: state.pullRequestId,
        text: "Prettifier-Bot here. The configuration changes made in this pull request look good to me.",
      })
      console.log(`${repoPrefix}: ADDED CONFIG CHANGE DEBUG COMMENT`)
    }

    if (prettifiedFiles.length === 0) {
      // no changed files --> nothing else to do here
      console.log(`${repoPrefix}: ALL ${files.length} FILES WERE ALREADY FORMATTED`)
      return
    }

    const isPullRequestFromFork = state.headOrg !== state.org
    if (isPullRequestFromFork) {
      const text = renderTemplate(await state.prettifierConfig.welcome(), { files: prettifiedFiles.map(f => f.path) })
      await addComment({ ...state, issueId: state.pullRequestId, text })
      console.log(`${repoPrefix}: COMMENTED ON PULL REQUEST FROM FORK`)
      return
    }

    // create a commit
    try {
      await createCommit({
        ...state,
        files: prettifiedFiles.map(f => {
          return { path: f.path, content: f.formatted }
        }),
        message: renderTemplate(await state.prettifierConfig.commitMessage(), {
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
      await addComment({ ...state, issueId: state.pullRequestId, text: state.prettifierConfig.commentTemplate })
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
