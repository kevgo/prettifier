import { promises as fs } from "fs"
import path from "path"
import { ProbotOctokit } from "probot"

import { DevError } from "../logging/dev-error"
import * as prettier from "../prettier/config"
import * as github from "."
import * as graphql from "./graphql-generated"

/** fields unique to push contexts */
interface PushContextUnique {
  prettierIgnore: string
  prettifierConfig: string
  pullRequestId: string
  pullRequestNumber: number
  pullRequestURL: string
}

/** the payload of loading additional push data via the GraphQL API */
export type PushContextData = PushContextUnique & prettier.ConfigResult

export async function loadPushContextData(
  octokit: InstanceType<typeof ProbotOctokit>,
  args: graphql.OnPushQueryVariables
): Promise<PushContextData> {
  let query = await fs.readFile(path.join("src", "github", "push-context.graphql"), "utf-8")
  query = query.replace(/\{\{branch\}\}/g, args.branch)
  const callResult: graphql.OnPushQuery = await octokit.graphql(query, args)

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
