/**
 * the Prettifier configuration values
 *
 * see ./defaults.ts for examples
 */
export interface Data {
  /** template for comments on the pull request */
  readonly commentTemplate: string

  readonly commitMessage: string

  /** names of the branches that should not be prettified */
  readonly excludeBranches: string[]

  /** names of files that should not be prettified */
  readonly excludeFiles: string[]

  /** comment template when pull requests from forks are unformatted */
  readonly prettificationNotification: string

  /** whether to only prettify branches that are under code review */
  readonly pullsOnly: boolean
}
