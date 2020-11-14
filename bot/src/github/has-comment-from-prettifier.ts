import { ProbotOctokit } from "probot"

const query = /* GraphQL */ `
  query PullRequestCommentAuthors($org: String!, $repo: String!, $pullrequest: Int!) {
    repository(owner: $org, name: $repo) {
      pullRequest(number: $pullrequest) {
        comments(first: 100) {
          nodes {
            author {
              login
            }
          }
        }
      }
    }
  }
`

/** returns whether the given pull request already has a comment from PrettifierBot */
export async function hasCommentFromPrettifier(args: {
  octokit: InstanceType<typeof ProbotOctokit>
  org: string
  pullRequestNumber: number
  repo: string
}): Promise<boolean> {
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
