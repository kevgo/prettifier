import { promises as fs } from "fs"
import path from "path"

import { PullRequestState } from "../on-pull-request"
import * as prettier from "../prettier/config"

/** fields unique to pull request contexts */
interface PullRequestContextUnique {
  prettierIgnore: string
  prettifierConfig: string
}

/** the payload of loading additional pull request data via the GraphQL API */
export type PullRequestContextData = PullRequestContextUnique & prettier.ConfigResult

export async function loadPullRequestContextData(state: PullRequestState): Promise<PullRequestContextData> {
  let query = await fs.readFile(path.join("src", "github", "pull-request-context.graphql"), "utf-8")
  query = query.replace(/\{\{branch\}\}/g, state.branch)
  const callResult: any = await state.github.graphql(query, { org: state.org, repo: state.repo, branch: state.branch })
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
