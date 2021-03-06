import webhooks from "@octokit/webhooks"
import * as probot from "probot"
import { ProbotOctokit } from "probot"

import * as github from "./github"
import { firstLineWithPill } from "./helpers/string-tools"
import { DevError, logDevError } from "./logging/dev-error"
import { logUserError, UserError } from "./logging/user-error"

const commandRE = /^\/([\w]+)\b *(.*)?$/

interface IssueCommentState {
  readonly issueId: string
  readonly issueNr: number
  readonly octokit: InstanceType<typeof ProbotOctokit>
  readonly org: string
  readonly repo: string
}

export async function onIssueComment(
  context: probot.Context<webhooks.EventPayloads.WebhookPayloadIssueComment>
): Promise<void> {
  let state: IssueCommentState | undefined
  let repoPrefix = ""
  try {
    // NOTE: loading this inside the try block to log rich errors when the payload changes
    state = {
      issueId: context.payload.issue.node_id,
      issueNr: context.payload.issue.number,
      octokit: context.github,
      org: context.payload.repository.owner.login,
      repo: context.payload.repository.name,
    }
    repoPrefix = `${state.org}/${state.repo}`
    if (context.payload.comment.user.login === "prettifier[bot]") {
      console.log(`${repoPrefix}: IGNORING MY OWN COMMENT`)
      return
    }
    if (context.payload.action !== "created") {
      console.log(`${repoPrefix}: IGNORING ${context.payload.action.toUpperCase()} COMMENT`)
      return
    }
    const issueText = context.payload.comment.body.trim()
    console.log(`${repoPrefix}: NEW COMMENT ON ISSUE #${state.issueNr}:\n${firstLineWithPill(issueText)}`)
    if (issueText === "") {
      console.log(`${repoPrefix}: EMPTY COMMENT`)
      return
    }
    const command = commandRE.exec(issueText)
    if (command == null) {
      console.log(`${repoPrefix}: NOT A BOT COMMAND, IGNORING`)
      return
    }
    const botName = command[1]
    if (botName !== "prettifier") {
      console.log(`${repoPrefix}: IGNORING COMMAND FOR OTHER BOT "${botName}"`)
      return
    }
    const botCommand = command[2]
    switch (botCommand) {
      case "debug":
        console.log(`${repoPrefix}: DEBUGGING`)
        // TODO
        return
      case "dev error":
        console.log(`${repoPrefix}: SIMULATING DEV ERROR`)
        await logDevError(new DevError("simulated error", new Error("underlying error"), state))
        return
      case "help":
        console.log(`${repoPrefix}: HELP COMMAND`)
        await github.addComment(context.github, { ...state, text: helpTemplate() })
        return
      case "config error":
        console.log(`${repoPrefix}: SIMULATING CONFIG ERROR`)
        await logUserError(
          new UserError(
            "simulated configuration error",
            `This is a simulated configuration error that you have requested by commenting \`${issueText}\`.`,
            new Error("underlying error"),
            state
          ),
          state.octokit
        )
        return
      case "user error":
        console.log(`${repoPrefix}: SIMULATING USER ERROR`)
        await logUserError(
          new UserError(
            "simulated activity",
            `This is a simulated user error that you have requested by commenting \`${issueText}\`.`,
            new Error("underlying error"),
            state
          ),
          state.octokit
        )
        return
      case undefined:
        console.log(`${repoPrefix}: MISSING COMMAND`)
        await addCommentWithGuidance({
          ...state,
          message: `missing command`,
          guidance: helpTemplate(),
        })
        return
      default:
        console.log(`${repoPrefix}: UNKNOWN PRETTIFIER COMMAND: ${botCommand}`)
        await addCommentWithGuidance({
          ...state,
          message: `unknown command: ${botCommand}`,
          guidance: helpTemplate(),
        })
    }
  } catch (e) {
    console.log(`${repoPrefix}: ${e}`)
    await logDevError(new DevError(e.message, e, state))
  }
}

async function addCommentWithGuidance(args: {
  guidance: string
  issueId: string
  message: string
  octokit: InstanceType<typeof probot.ProbotOctokit>
}) {
  await github.addComment(args.octokit, { ...args, text: `${args.message}\n\n${args.guidance}` })
}

function helpTemplate(): string {
  return `I understand these commands:\n
- \`/prettifier user error\` simulates a user error
- \`/prettifier config error\` show the error message for broken configuration
- \`/prettifier help\` for this help screen
`
}
