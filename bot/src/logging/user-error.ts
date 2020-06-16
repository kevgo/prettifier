import { GitHubAPI } from "probot/lib/github"
import { addComment } from "../github/add-comment"
import { Context } from "./context"

/** UserError indicates a user error */
export class UserError extends Error {
  activity: string
  cause: Error
  context: Context

  constructor(activity: string, cause: Error, context: Context = {}) {
    super()
    this.activity = activity
    this.cause = cause
    this.context = context
  }
}

/** Logs a user mistake. */
export function logUserError(
  err: Error,
  desc: string,
  context: Context,
  pullRequestId: string,
  github: GitHubAPI
): void {
  console.log(`${context.org}|${context.repo}: USER ERROR: ${desc}:`, err.message)
  if (pullRequestId !== "") {
    addComment(pullRequestId, bodyTemplate(err, desc), github)
  }
}

export function bodyTemplate(err: Error, desc: string): string {
  return `Prettifier-Bot here. I noticed a problem with your setup:

\`\`\`
${desc}
\`\`\`

More details:
\`\`\`
${err.message}
\`\`\`

I can't format your code until this is fixed.

If you think this is an error on my side, please report this problem using [this form](https://github.com/kevgo/prettifier/issues/new).

I will only comment when I see relevant configuration changes.`
}
