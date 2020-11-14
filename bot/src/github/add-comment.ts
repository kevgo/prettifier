import { ProbotOctokit } from "probot"

import * as graphql from "./graphql-generated"

const query = /* GraphQL */ `
  mutation addComment($issueId: ID!, $text: String!) {
    addComment(input: { subjectId: $issueId, body: $text }) {
      clientMutationId
    }
  }
`

export async function addComment(
  octokit: InstanceType<typeof ProbotOctokit>,
  args: graphql.AddCommentMutationVariables
): Promise<void> {
  await octokit.graphql(query, args)
}
