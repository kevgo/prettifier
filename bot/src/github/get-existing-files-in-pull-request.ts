import { ProbotOctokit } from "probot"

/**
 * Returns the paths for files that exist in the given pull request.
 * Files that the pull request deletes do not exist anymore.
 */
export async function getExistingFilesInPullRequests(
  org: string,
  repo: string,
  pullRequestNumber: number,
  github: InstanceType<typeof ProbotOctokit>
): Promise<string[]> {
  // This is a candidate to do via the GraphQL API.
  // This API doesn't support showing whether the file was added or deleted yet.
  // https://github.community/t5/GitHub-API-Development-and/GraphQL-API-doesn-t-indicate-which-files-in-a-PR-are-new/m-p/35031
  const callResult = await github.pulls.listFiles({
    owner: org,
    pull_number: pullRequestNumber,
    repo,
  })
  const result = []
  for (const file of callResult.data) {
    if (file.status !== "removed") {
      result.push(file.filename)
    }
  }
  return result
}
