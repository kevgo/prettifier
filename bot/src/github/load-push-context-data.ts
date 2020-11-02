import { promises as fs } from "fs"
import path from "path"
import { ProbotOctokit } from "probot"

import { DevError } from "../logging/dev-error"
import * as prettier from "../prettier/config"

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

export async function loadPushContextData(args: {
  branch: string
  github: InstanceType<typeof ProbotOctokit>
  org: string
  repo: string
}): Promise<PushContextData> {
  let query = await fs.readFile(path.join("src", "github", "push-context.graphql"), "utf-8")
  query = query.replace(/\{\{branch\}\}/g, args.branch)
  const callResult: any = await args.github.graphql(query, {
    org: args.org,
    repo: args.repo,
    branch: args.branch,
  })

  let pullRequestNumber = 0
  let pullRequestId = ""
  let pullRequestURL = ""
  const pulls = callResult?.repository?.ref?.associatedPullRequests
  if (pulls.totalCount > 1) {
    throw new DevError("multiple open pull requests found for branch", new Error())
  }
  if (pulls.totalCount > 0) {
    pullRequestNumber = pulls.nodes[0].number
    pullRequestId = pulls.nodes[0].id
    pullRequestURL = pulls.nodes[0].url
  }

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
    pullRequestNumber,
    pullRequestId,
    pullRequestURL,
  }
}
