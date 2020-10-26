import * as probot from "probot"
import webhooks from "@octokit/webhooks"
import { addComment } from "./github/add-comment"
import { DevError, logDevError } from "./logging/dev-error"
import { firstLineWithPill } from "./helpers/string-tools"
import { logUserError, UserError } from "./logging/user-error"

const commandRE = /^\/([\w]+)\b *(.*)?$/

export function onIssueComment(context: probot.Context<webhooks.WebhookPayloadIssueComment>): void {
  let org = ""
  let repo = ""
  let issueID = ""
  let issueNr = 0
  let github = null
  let repoPrefix = ""
  try {
    org = context.payload.repository.owner.login
    repo = context.payload.repository.name
    issueID = context.payload.issue.node_id
    issueNr = context.payload.issue.number
    github = context.github
    repoPrefix = `${org}/${repo}`
    if (context.payload.comment.user.login === "prettifier[bot]") {
      console.log(`${repoPrefix}: IGNORING MY OWN COMMENT`)
      return
    }
    if (context.payload.action !== "created") {
      console.log(`${repoPrefix}: IGNORING ${context.payload.action.toUpperCase()} COMMENT`)
      return
    }
    const issueText = context.payload.comment.body.trim()
    console.log(`${repoPrefix}: NEW COMMENT ON ISSUE #${issueNr}:\n${firstLineWithPill(issueText)}`)
    if (issueText === "") {
      console.log(`${repoPrefix}: EMPTY COMMENT`)
      return
    }
    const command = issueText.match(commandRE)
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
        logDevError(
          new DevError("simulated error", new Error("underlying error"), { org, repo, issueID, issueNr }),
          github
        )
        return
      case "help":
        console.log(`${repoPrefix}: HELP COMMAND`)
        addComment(issueID, helpTemplate(), github)
        return
      case "user error":
        console.log(`${repoPrefix}: SIMULATING USER ERROR`)
        logUserError(
          new UserError(
            "simulated activity",
            `This is a simulated user error that you have requested by commenting "${issueText}".`,
            new Error("underlying error"),
            { org, repo, issueID, issueNr }
          ),
          github
        )
        return
      case undefined:
        console.log(`${repoPrefix}: MISSING COMMAND`)
        addCommentWithGuidance(issueID, `missing command`, helpTemplate(), github)
        return
      default:
        console.log(`${repoPrefix}: UNKNOWN PRETTIFIER COMMAND: ${botCommand}`)
        addCommentWithGuidance(issueID, `unknown command: ${botCommand}`, helpTemplate(), github)
    }
  } catch (e) {
    console.log(`${repoPrefix}: ${e}`)
    if (github) {
      const devErr = new DevError(e.message, e, { org, repo, issueNr, issueID })
      logDevError(devErr, github)
    }
  }
}

function addCommentWithGuidance(
  issueID: string,
  message: string,
  guidance: string,
  github: InstanceType<typeof probot.ProbotOctokit>
) {
  addComment(issueID, `${message}\n\n${guidance}`, github)
}

function helpTemplate(): string {
  return `I understand these commands:\n
- \`prettifier debug\` prints the Prettifier configuration used for this repo
- \`/prettifier user error\` simulates a user error
- \`/prettifier help\` for this help screen
`
}
