import { RequestError } from "@octokit/request-error"
import { ProbotOctokit } from "probot"

import { DevError } from "../logging/dev-error"
import { LoggedError } from "../logging/logged-error"
import { createCommit, FileToCreate } from "./create-commit"

export async function createPullRequest(args: {
  body: string
  branch: string
  files: FileToCreate[]
  github: InstanceType<typeof ProbotOctokit>
  message: string
  org: string
  parentBranch: string
  repo: string
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
      if (e.status === 403 && e.message === "Resource not accessible by integration") {
        console.log(`${args.org}|${args.repo}|${args.branch}: USER HASN'T ACCEPTED THE PERMISSIONS TO EDIT CONTENT`)
        throw new LoggedError()
      }
      throw new DevError("creating a pull request", e, args)
    }
  }
}
