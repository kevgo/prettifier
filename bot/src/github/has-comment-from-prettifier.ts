import { promises as fs } from "fs"
import path from "path"
import { ProbotOctokit } from "probot"

/** returns whether the given pull request already has a comment from PrettifierBot */
export async function hasCommentFromPrettifier(args: {
  octokit: InstanceType<typeof ProbotOctokit>
  org: string
  pullRequestNumber: number
  repo: string
}): Promise<boolean> {
  const query = await fs.readFile(path.join("src", "github", "pullrequest-comment-authors.graphql"), "utf-8")
  const callResult: any = await args.octokit.graphql(query, {
    org: args.org,
    repo: args.repo,
    pullrequest: args.pullRequestNumber,
  })
  for (const comment of callResult?.repository.pullRequest.comments.nodes) {
    if (comment.author.login === "prettifier") {
      return true
    }
  }
  return false
}
