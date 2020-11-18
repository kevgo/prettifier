import { ProbotOctokit } from "probot"

import * as github from "../github"
import { Context } from "./context"

/** UserError indicates an error that the user made */
export class UserError extends Error {
  readonly guidance: string
  readonly cause: Error
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
export async function logUserError(e: UserError, octokit: InstanceType<typeof ProbotOctokit>): Promise<void> {
  console.log(`${e.context.org}|${e.context.repo}: USER ERROR: ${e.message}:`, e.message)
  if (e.context.pullRequestId !== "") {
    await github.addComment(octokit, {
      issueId: e.context.pullRequestId || e.context.issueId,
      text: bodyTemplate(e),
    })
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
