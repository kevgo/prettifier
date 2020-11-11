import { promises as fs } from "fs"
import { ProbotOctokit } from "probot"
import path = require("path")
import * as graphql from "./graphql-generated"

export async function addComment(
  octokit: InstanceType<typeof ProbotOctokit>,
  args: graphql.AddCommentMutationVariables
): Promise<void> {
  const query = await fs.readFile(path.join("src", "github", "add-comment.graphql"), "utf-8")
  await octokit.graphql(query, args)
}
