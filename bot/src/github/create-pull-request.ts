import { createCommit, FileToCreate } from "./create-commit"
import { ProbotOctokit } from "probot"
import { DevError } from "../logging/dev-error"
import { RequestError } from "@octokit/request-error"
import { LoggedError } from "../logging/logged-error"

export async function createPullRequest(args: {
  org: string
  repo: string
  parentBranch: string
  branch: string
  message: string
  body: string
  files: FileToCreate[]
  github: InstanceType<typeof ProbotOctokit>
}): Promise<void> {
  // get the SHA of the latest commit in the parent branch
  try {
    const getRefResult = await args.github.git.getRef({
      owner: args.org,
      ref: `heads/${args.parentBranch}`,
      repo: args.repo,
    })
    const parentBranchSHA = getRefResult.data.object.sha

    // create a branch for the changes
    await args.github.git.createRef({
      owner: args.org,
      ref: `refs/heads/${args.branch}`,
      repo: args.repo,
      sha: parentBranchSHA,
    })

    // commit changes into in the new branch
    await createCommit(args)

    // create the pull request
    await args.github.pulls.create({
      base: args.parentBranch,
      body: args.body,
      head: args.branch,
      owner: args.org,
      repo: args.repo,
      title: args.message,
    })
  } catch (e) {
    if (e instanceof RequestError) {
      const requestError = e as RequestError
      if (requestError.status === 403 && requestError.message === "Resource not accessible by integration") {
        console.log(`${args.org}|${args.repo}|${args.branch}: USER HASN'T ACCEPTED THE PERMISSIONS TO EDIT CONTENT`)
        throw new LoggedError()
      }
      throw new DevError("creating a pull request", e, args)
    }
  }
}
