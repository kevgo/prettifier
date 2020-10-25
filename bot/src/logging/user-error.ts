import { ProbotOctokit } from "probot"
import { addComment } from "../github/add-comment"
import { Context } from "./context"

/** UserError indicates an error that the user made */
export class UserError extends Error {
  guidance: string
  cause: Error
  context: Context

  constructor(message: string, guidance: string, cause: Error, context: Context = {}) {
    super(message)
    this.guidance = guidance
    this.cause = cause
    this.context = context
  }

  /** adds missing fields from the given context to this error */
  enrich(additionalContext: Context): void {
    this.context = { ...additionalContext, ...this.context }
  }
}

/** Logs a user mistake. */
export function logUserError(e: UserError, github: InstanceType<typeof ProbotOctokit>): void {
  console.log(`${e.context.org}|${e.context.repo}: USER ERROR: ${e.message}:`, e.message)
  if (e.context.pullRequestId !== "") {
    addComment(e.context.pullRequestId || e.context.issueID, bodyTemplate(e), github)
  }
}

export function bodyTemplate(err: UserError): string {
  return `Prettifier-Bot here. I noticed a problem with your setup: _${err.message}_

${err.guidance}

More details:
\`\`\`
${err.cause}
\`\`\`

I can't format your code until this is fixed.
If you think this is an error on my end, please report this problem using [this form](https://github.com/kevgo/prettifier/issues/new).
I will only comment when I see new configuration changes.
`
}
