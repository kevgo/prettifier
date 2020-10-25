import * as probot from "probot"
import { onIssueComment } from "./on-issue-comment"
import { onPullRequest } from "./on-pull-request"
import { onPush } from "./on-push"

export = function startBot(app: probot.Application): void {
  app.on("push", onPush)
  app.on("pull_request.opened", onPullRequest)
  app.on("issue_comment.created", onIssueComment)
  console.log("PRETTIFIER STARTED")
}
