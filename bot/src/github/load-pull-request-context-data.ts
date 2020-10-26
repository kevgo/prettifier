import { ProbotOctokit } from "probot"
import { promises as fs } from "fs"
import path from "path"
import { PrettierConfigResult } from "../prettier/config"

/** fields unique to pull request contexts */
interface PullRequestContextUnique {
  prettifierConfig: string
  prettierIgnore: string
}

/** the payload of loading additional pull request data via the GraphQL API */
export type PullRequestContextData = PullRequestContextUnique & PrettierConfigResult

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
    package_json: callResult?.repository.package_json?.text || "",
    prettierrc: callResult?.repository.prettierrc?.text || "",
    prettierrc_json: callResult?.repository.prettierrc_json?.text || "",
    prettierrc_json5: callResult?.repository.prettierrc_json5?.text || "",
    prettierrc_toml: callResult?.repository.prettierrc_toml?.text || "",
    prettierrc_yml: callResult?.repository.prettierrc_yml?.text || "",
    prettierrc_yaml: callResult?.repository.prettierrc_yaml?.text || "",
    prettierIgnore: callResult?.repository.prettierIgnore?.text || "",
  }
}
