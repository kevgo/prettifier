import util from "util"
import { GitHubAPI } from "probot/lib/github"
import { Context } from "./context"

/** DevError incidates a developer error */
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
}

/** logs the given developer error as a GitHub issue */
export async function logDevError(err: Error, activity: string, context: Context, github: GitHubAPI): Promise<void> {
  console.log(`${context.org}|${context.repo}|${context.branch}: Error ${activity}`)
  await github.issues.create({
    owner: "kevgo",
    repo: "prettifier",
    title: `Error ${activity}: ${err.message}`,
    body: bodyTemplate(err, context),
  })
}

export function bodyTemplate(err: Error, context: Context): string {
  let result = "Environment:\n"
  for (const [k, v] of Object.entries(context)) {
    if (typeof v === "object") {
      result += `- **${k}:**\n\`\`\`\n${JSON.stringify(v, null, 2)}\n\`\`\`\n`
    } else {
      result += `- **${k}:** \`${v}\`\n`
    }
  }
  result += `

### Error

\`\`\`
${util.inspect(err, false, Infinity)}
\`\`\`

### Stack

\`\`\`
${err.stack}
\`\`\`
`
  return result
}
