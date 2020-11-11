import { promises as fs } from "fs"
import path from "path"

import { PullRequestState } from "../on-pull-request"
import * as prettier from "../prettier/config"
import * as graphql from "./graphql-generated"

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
  const callResult: graphql.OnPullRequestQuery = await state.octokit.graphql(query, {
    org: state.org,
    repo: state.repo,
  } as graphql.OnPullRequestQueryVariables)
  return {
    prettifierConfig: blobText(callResult.repository?.prettifierConfig),
    package_json: blobText(callResult.repository?.package_json),
    prettierrc: blobText(callResult.repository?.prettierrc),
    prettierrc_json: blobText(callResult.repository?.prettierrc_json),
    prettierrc_json5: blobText(callResult.repository?.prettierrc_json5),
    prettierrc_toml: blobText(callResult.repository?.prettierrc_toml),
    prettierrc_yml: blobText(callResult.repository?.prettierrc_yml),
    prettierrc_yaml: blobText(callResult.repository?.prettierrc_yaml),
    prettierIgnore: blobText(callResult.repository?.prettierIgnore),
  }
}

/**
 * provides the text for elements of PushContextData,
 * the weird types are generated
 */
export function blobText(
  obj:
    | { __typename?: "Commit" | undefined }
    | { __typename?: "Tag" | undefined }
    | { __typename?: "Tree" | undefined }
    | ({ __typename?: "Blob" | undefined } & Pick<graphql.Blob, "text">)
    | null
    | undefined
): string {
  if (obj?.__typename === "Blob") {
    return obj.text ?? ""
  } else {
    return ""
  }
}
