import { promises as fs } from "fs"
import { ProbotOctokit } from "probot"
import path = require("path")

export async function addComment(
  issueId: string,
  text: string,
  github: InstanceType<typeof ProbotOctokit>
): Promise<void> {
  const query = await fs.readFile(path.join("src", "github", "add-comment.graphql"), "utf-8")
  await github.graphql(query, { issueId, text })
}
