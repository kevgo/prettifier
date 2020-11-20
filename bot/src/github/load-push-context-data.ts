import { ProbotOctokit } from "probot"

import { DevError } from "../logging/dev-error"
import * as prettier from "../prettier/config"
import * as github from "."
import * as graphql from "./graphql-generated"

/** fields unique to push contexts */
interface PushContextUnique {
  readonly prettierIgnore: string
  readonly prettifierConfig: string
  readonly pullRequestId: string
  readonly pullRequestNumber: number
  readonly pullRequestURL: string
}

/** the payload of loading additional push data via the GraphQL API */
export type PushContextData = PushContextUnique & prettier.ConfigResult

const query = /* GraphQL */ `
  query OnPush($org: String!, $repo: String!, $branch: String!) {
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

      # pull-request for this branch
      ref(qualifiedName: $branch) {
        associatedPullRequests(first: 2, states: OPEN) {
          totalCount
          nodes {
            number
            id
            url
          }
        }
      }
    }
  }
`

export async function loadPushContextData(
  octokit: InstanceType<typeof ProbotOctokit>,
  args: graphql.OnPushQueryVariables
): Promise<PushContextData> {
  const fullQuery = query.replace(/\{\{branch\}\}/g, args.branch)
  const callResult: graphql.OnPushQuery = await octokit.graphql(fullQuery, args)

  let pullRequestNumber = 0
  let pullRequestId = ""
  let pullRequestURL = ""
  const pulls = callResult.repository?.ref?.associatedPullRequests
  if (pulls && pulls.totalCount > 1) {
    throw new DevError("multiple open pull requests found for branch", new Error())
  }
  if (pulls && pulls.totalCount > 0) {
    pullRequestNumber = pulls?.nodes?.[0]?.number ?? -1
    pullRequestId = pulls?.nodes?.[0]?.id ?? ""
    pullRequestURL = pulls?.nodes?.[0]?.url
  }

  return {
    prettifierConfig: github.blobText(callResult.repository?.prettifierConfig),
    package_json: github.blobText(callResult.repository?.package_json),
    prettierrc: github.blobText(callResult.repository?.prettierrc),
    prettierrc_json: github.blobText(callResult.repository?.prettierrc_json),
    prettierrc_json5: github.blobText(callResult.repository?.prettierrc_json5),
    prettierrc_toml: github.blobText(callResult.repository?.prettierrc_toml),
    prettierrc_yml: github.blobText(callResult.repository?.prettierrc_yml),
    prettierrc_yaml: github.blobText(callResult.repository?.prettierrc_yaml),
    prettierIgnore: github.blobText(callResult.repository?.prettierIgnore),
    pullRequestNumber,
    pullRequestId,
    pullRequestURL,
  }
}
