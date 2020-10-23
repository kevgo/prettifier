import util from "util"
import { ProbotOctokit } from "probot"
import { Context } from "./context"

/** DevError incidates a Prettifier bug */
export class DevError extends Error {
  activity: string
  context: Context
  cause: Error

  constructor(activity: string, cause: Error, context: Context = {}) {
    super()
    this.activity = activity
    this.cause = cause
    this.context = context
  }

  /** adds missing fields from the given context to this error */
  enrich(additionalContext: Context): void {
    this.context = { ...additionalContext, ...this.context }
  }
}

/** logs the given developer error as a GitHub issue */
export async function logDevError(err: DevError, github: InstanceType<typeof ProbotOctokit>): Promise<void> {
  console.log(`${err.context.org}|${err.context.repo}|${err.context.branch}: DevError ${err.activity}`)
  await github.issues.create({
    owner: "kevgo",
    repo: "prettifier",
    title: `Error ${err.activity}: ${err.message}`,
    body: bodyTemplate(err),
  })
}

export function bodyTemplate(err: DevError): string {
  let result = "Environment:\n"
  for (const [k, v] of Object.entries(err.context)) {
    if (typeof v === "object") {
      result += `- **${k}:**\n\`\`\`\n${JSON.stringify(v, null, 2)}\n\`\`\`\n`
    } else {
      result += `- **${k}:** \`${v}\`\n`
    }
  }
  result += `

### Error

\`\`\`
${util.inspect(err, true, Infinity)}
\`\`\`

### Cause

\`\`\`
${util.inspect(err.cause, true, Infinity)}
\`\`\`

### Context

\`\`\`
${util.inspect(err.context, true, Infinity)}
\`\`\`

### Stack

\`\`\`
${err.stack}
\`\`\`
`
  return result
}
