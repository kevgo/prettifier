import { ProbotOctokit } from "probot"
import { promises as fs } from "fs"
import path from "path"

export interface PullRequestContextData {
  prettifierConfig: string
  prettierConfig: string
  prettierIgnore: string
}

export async function loadPullRequestContextData(
  org: string,
  repo: string,
  branch: string,
  github: InstanceType<typeof ProbotOctokit>
): Promise<PullRequestContextData> {
  let query = await fs.readFile(path.join("src", "github", "pull-request-context.graphql"), "utf-8")
  query = query.replace(/\{\{branch\}\}/g, branch)
  const callResult: any = await github.graphql(query, { org, repo, branch })
  return {
    prettifierConfig: callResult?.repository.prettifierConfig?.text || "",
    prettierConfig: callResult?.repository.prettierConfig?.text || "",
    prettierIgnore: callResult?.repository.prettierIgnore?.text || "",
  }
}
