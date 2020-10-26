import util from "util"
import { ProbotOctokit } from "probot"
import { Context } from "./context"

/** DevError incidates a Prettifier bug */
export class DevError extends Error {
  context: Context
  cause: Error

  constructor(activity: string, cause: Error, context: Context = {}) {
    super(activity)
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
  console.log(`${err.context.org}|${err.context.repo}: DevError ${err.message}`)
  await github.issues.create({
    owner: "kevgo",
    repo: "prettifier",
    title: `Bug report: ${err.message}`,
    body: bodyTemplate(err),
  })
}

export function bodyTemplate(err: DevError): string {
  return `
<details>
  <summary>the error</summary>

  \`\`\`
  ${util.inspect(err, true, Infinity)}
  \`\`\`
</details>

<details>
  <summary>cause</summary>

  \`\`\`
  ${util.inspect(err.cause, true, Infinity)}
  \`\`\`
</details>

<details>
  <summary>context</summary>

  \`\`\`
  ${util.inspect(err.context, true, Infinity)}
  \`\`\`
</details>

<details>
  <summary>err.stack</summary>

  \`\`\`
  ${err.stack}

  ${err.cause.stack}
  \`\`\`
</details>
`
}
