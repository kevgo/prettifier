import { promises as fs } from "fs"
import { ProbotOctokit } from "probot"
import path = require("path")

export async function addComment(args: {
  issueId: string
  octokit: InstanceType<typeof ProbotOctokit>
  text: string
}): Promise<void> {
  const query = await fs.readFile(path.join("src", "github", "add-comment.graphql"), "utf-8")
  await args.octokit.graphql(query, { issueId: args.issueId, text: args.text })
}
