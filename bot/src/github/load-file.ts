import { ProbotOctokit } from "probot"
import { DevError } from "../logging/dev-error"

/** Loads the content of the given file in the given branch from GitHub. */
export async function loadFile(
  org: string,
  repo: string,
  branch: string,
  filePath: string,
  github: InstanceType<typeof ProbotOctokit>
): Promise<string> {
  const result = await github.repos.getContent({
    owner: org,
    path: filePath,
    ref: branch,
    repo,
  })
  if (result.data instanceof Array) {
    throw new DevError("loading the content of a file from GitHub", new Error(), {
      filePath,
      message: "Received unexpected array while loading a single file from GitHub, expected single entry",
    })
  }
  return Buffer.from(result.data.content || "", "base64").toString()
}
