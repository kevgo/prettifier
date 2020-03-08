import * as probot from "probot"
import webhooks from "@octokit/webhooks"
import { loadFile } from "./github/load-file"
import { getExistingFilesInPullRequests } from "./github/get-existing-files-in-pull-request"
import { renderTemplate } from "./template/render-template"
import { createCommit } from "./github/create-commit"
import { applyPrettierConfigOverrides } from "./prettier/apply-prettier-config-overrides"
import { prettify } from "./prettier/prettify"
import { addComment } from "./github/add-comment"
import { DevError, logDevError } from "./logging/dev-error"
import { LoggedError } from "./logging/logged-error"
import { RequestError } from "@octokit/request-error"
import { isConfigurationFile } from "./config/is-configuration-file"
import { prettierConfigFromYML } from "./prettier/prettier-config-from-yml"
import { prettifierConfigFromYML } from "./config/prettifier-configuration-from-yml"
import { PrettifierConfiguration } from "./config/prettifier-configuration"
import { PullRequestContextData, loadPullRequestContextData } from "./github/load-pull-request-context-data"

/** called when this bot gets notified about a new pull request */
export async function onPullRequest(context: probot.Context<webhooks.WebhookPayloadPullRequest>): Promise<void> {
  let org = ""
  let repo = ""
  let branch = ""
  let pullRequestNumber = 0
  let pullRequestId = ""
  let pullRequestURL = ""
  try {
    org = context.payload.repository.owner.login
    repo = context.payload.repository.name
    branch = context.payload.pull_request.head.ref
    pullRequestNumber = context.payload.pull_request.number
    pullRequestId = context.payload.pull_request.node_id
    pullRequestURL = context.payload.pull_request.html_url
    const repoPrefix = `${org}/${repo}|#${pullRequestNumber}`
    console.log(`${repoPrefix}: PULL REQUEST DETECTED`)

    if (context.payload.action !== "opened") {
      console.log(`${repoPrefix}: PULL REQUEST ACTION IS ${context.payload.action}, IGNORING`)
      return
    }

    // load additional information from GitHub
    const pullRequestContextData = await loadPullRequestContextData(org, repo, branch, context.github)
    const { prettifierConfig, prettierConfig } = parsePullRequestContextData(pullRequestContextData)
    console.log(`${repoPrefix}: BOT CONFIG: ${JSON.stringify(prettifierConfig)}`)
    console.log(`${repoPrefix}: PRETTIER CONFIG: ${JSON.stringify(prettierConfig)}`)

    // check whether this branch should be ignored
    if (prettifierConfig.shouldIgnoreBranch(branch)) {
      console.log(`${repoPrefix}: IGNORING THIS BRANCH PER BOT CONFIG`)
      return
    }

    // load the files that this PR changes
    const files = await getExistingFilesInPullRequests(org, repo, pullRequestNumber, context.github)
    const prettifiedFiles = []
    let configChange = false
    for (let i = 0; i < files.length; i++) {
      const filePath = files[i]
      if (isConfigurationFile(filePath)) {
        configChange = true
      }
      const filePrefix = `${repoPrefix}: FILE ${i + 1}/${files.length} (${filePath})`
      // ignore files that shouldn't be prettified
      const shouldPrettify = await prettifierConfig.shouldPrettify(filePath)
      if (!shouldPrettify) {
        console.log(`${filePrefix} - IGNORING`)
        continue
      }

      // load the file content
      const fileContent = await loadFile(org, repo, branch, filePath, context.github)

      // prettify the file content
      const prettierConfigForFile = applyPrettierConfigOverrides(prettierConfig, filePath)
      const formatted = prettify(fileContent, filePath, prettierConfigForFile)

      // ignore if there are no changes
      if (formatted === fileContent) {
        console.log(`${filePrefix} - ALREADY FORMATTED`)
        continue
      }

      // store the prettified content
      prettifiedFiles.push({ path: filePath, content: formatted })
      console.log(`${filePrefix} - PRETTIFYING`)
    }

    // verify correct config changes
    if (configChange) {
      try {
        await addComment(
          pullRequestId,
          "Prettifier-Bot here. The configuration changes made in this pull request look good to me.",
          context.github
        )
      } catch (e) {
        throw new DevError(`Commenting that configuration changes are ok`, e)
      }
      console.log(`${repoPrefix}: ADDED CONFIG CHANGE DEBUG COMMENT`)
    }

    if (prettifiedFiles.length === 0) {
      // no changed files --> nothing else to do here
      console.log(`${repoPrefix}: ALL ${files.length} FILES WERE ALREADY FORMATTED`)
      return
    }

    const isPullRequestFromFork =
      context.payload.pull_request.head.repo.full_name !== context.payload.pull_request.base.repo.full_name
    if (isPullRequestFromFork) {
      const text = renderTemplate(await prettifierConfig.forkComment(), { files: prettifiedFiles.map(f => f.path) })
      try {
        await addComment(pullRequestId, text, context.github)
      } catch (e) {
        throw new DevError(`commenting on pull request from fork`, e)
      }
      console.log(`${repoPrefix}: COMMENTED ON PULL REQUEST FROM FORK`)
      return
    }

    // create a commit
    for (let createCommitTries = 2; createCommitTries > 0; createCommitTries--) {
      try {
        await createCommit({
          branch,
          github: context.github,
          files: prettifiedFiles,
          message: renderTemplate(await prettifierConfig.commitMessage(), { files: prettifiedFiles.map(f => f.path) }),
          org,
          repo
        })
        console.log(`${repoPrefix}: COMMITTED ${prettifiedFiles.length} PRETTIFIED FILES`)
      } catch (e) {
        if (e instanceof RequestError) {
          const requestError = e as RequestError
          if (requestError.status === 422) {
            if (requestError.message.includes("Required status check")) {
              // pull request of a protected branch
              return
            }
            if (requestError.message === "Update is not a fast forward") {
              // somebody else committed at the same time --> try again
              console.log(
                `${repoPrefix}: CANNOT CREATE COMMIT ON NEW PULL REQUEST BECAUSE UPDATE IS NOT A FAST FORWARD, TRYING AGAIN`
              )
              continue
            }
          }
          if (requestError.status === 403) {
            if (requestError.message.includes("Resource not accessible by integration")) {
              // nothing we can do here
              // TODO: send error to user asking to update permissions?
              return
            }
          }
        }
        throw new DevError("creating a commit on a freshly opened pull request", e)
      }
    }

    // add community comment
    if (prettifierConfig.commentTemplate !== "") {
      try {
        await addComment(pullRequestId, prettifierConfig.commentTemplate, context.github)
      } catch (e) {
        throw new DevError(`adding community comment`, e)
      }
      console.log(`${repoPrefix}: ADDED COMMUNITY COMMENT`)
    }
  } catch (e) {
    if (e instanceof LoggedError) {
      return
    }
    if (e instanceof DevError) {
      e.context.org = org
      e.context.repo = repo
      e.context.branch = branch
      e.context.pullRequestNumber = pullRequestNumber
      logDevError(e, e.activity, e.context, context.github)
      return
    }
    logDevError(
      e,
      "unknown dev error",
      { pullRequestURL, event: "on-pull-request", payload: context.payload },
      context.github
    )
  }
}

interface PullRequestContext {
  prettifierConfig: PrettifierConfiguration
  prettierConfig: object
}

export function parsePullRequestContextData(data: PullRequestContextData): PullRequestContext {
  const prettifierConfig = prettifierConfigFromYML(data.prettifierConfig)
  const prettierConfig = prettierConfigFromYML(data.prettierConfig)
  return { prettifierConfig, prettierConfig }
}
