import { PullRequestState } from "../on-pull-request"
import * as prettier from "../prettier/config"
import * as graphql from "./graphql-generated"

/** fields unique to pull request contexts */
interface PullRequestContextUnique {
  readonly prettierIgnore: string
  readonly prettifierConfig: string
}

/** the payload of loading additional pull request data via the GraphQL API */
export type PullRequestContextData = PullRequestContextUnique & prettier.ConfigResult

const query = /* GraphQL */ `
  query OnPullRequest($org: String!, $repo: String!) {
    # config file contents
    repository(owner: $org, name: $repo) {
      prettifierConfig: object(expression: "{{branch}}:.github/prettifier.yml") {
        __typename
        ... on Blob {
          text
        }
      }
      package_json: object(expression: "{{branch}}:package.json") {
        __typename
        ... on Blob {
          text
        }
      }
      prettierrc: object(expression: "{{branch}}:.prettierrc") {
        __typename
        ... on Blob {
          text
        }
      }
      prettierrc_json: object(expression: "{{branch}}:.prettierrc.json") {
        __typename
        ... on Blob {
          text
        }
      }
      prettierrc_json5: object(expression: "{{branch}}:.prettierrc.json5") {
        __typename
        ... on Blob {
          text
        }
      }
      prettierrc_toml: object(expression: "{{branch}}:.prettierrc.toml") {
        __typename
        ... on Blob {
          text
        }
      }
      prettierrc_yml: object(expression: "{{branch}}:.prettierrc.yml") {
        __typename
        ... on Blob {
          text
        }
      }
      prettierrc_yaml: object(expression: "{{branch}}:.prettierrc.yaml") {
        __typename
        ... on Blob {
          text
        }
      }
      prettierIgnore: object(expression: "{{branch}}:.prettierignore") {
        __typename
        ... on Blob {
          text
        }
      }
    }
  }
`

export async function loadPullRequestContextData(state: PullRequestState): Promise<PullRequestContextData> {
  const fullQuery = query.replace(/\{\{branch\}\}/g, state.branch)
  const callResult: graphql.OnPullRequestQuery = await state.octokit.graphql(fullQuery, {
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
