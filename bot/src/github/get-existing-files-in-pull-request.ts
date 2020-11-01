import { ProbotOctokit } from "probot"

/**
 * Returns the paths for files that exist in the given pull request.
 * Files that the pull request deletes do not exist anymore.
 */
export async function getExistingFilesInPullRequests(args: {
  github: InstanceType<typeof ProbotOctokit>
  org: string
  pullRequestNumber: number
  repo: string
}): Promise<string[]> {
  // This is a candidate to do via the GraphQL API.
  // This API doesn't support showing whether the file was added or deleted yet.
  // https://github.community/t5/GitHub-API-Development-and/GraphQL-API-doesn-t-indicate-which-files-in-a-PR-are-new/m-p/35031
  const callResult = await args.github.pulls.listFiles({
    owner: args.org,
    pull_number: args.pullRequestNumber,
    repo: args.repo,
  })
  const result = []
  for (const file of callResult.data) {
    if (file.status !== "removed") {
      result.push(file.filename)
    }
  }
  return result
}
