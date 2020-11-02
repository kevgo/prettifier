import { ProbotOctokit } from "probot"

import { DevError } from "../logging/dev-error"

/** Loads the content of the given file in the given branch from GitHub. */
export async function loadFile(args: {
  branch: string
  filePath: string
  octokit: InstanceType<typeof ProbotOctokit>
  org: string
  repo: string
}): Promise<string> {
  const result = await args.octokit.repos.getContent({
    owner: args.org,
    path: args.filePath,
    ref: args.branch,
    repo: args.repo,
  })
  if (result instanceof Array) {
    throw new DevError("loading the content of a file from GitHub", new Error(), {
      filePath: args.filePath,
      message: "Received unexpected array while loading a single file from GitHub, expected single entry",
    })
  }
  return Buffer.from(result.data.content || "", "base64").toString()
}
