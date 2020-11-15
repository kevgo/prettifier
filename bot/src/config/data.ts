/**
 * the Prettifier configuration values
 *
 * see ./defaults.ts for examples
 */
export interface Data {
  /** template for comments on the pull request */
  commentTemplate: string

  commitMessage: string

  /** names of the branches that should not be prettified */
  excludeBranches: string[]

  /** names of files that should not be prettified */
  excludeFiles: string[]

  /** comment template when pull requests from forks are unformatted */
  prettificationNotification: string

  /** whether to only prettify branches that are under code review */
  pullsOnly: boolean
}
