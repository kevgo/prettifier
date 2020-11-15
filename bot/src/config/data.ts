/** the Prettifier configuration values  */
export interface Data {
  /** template for comments on the pull request */
  commentTemplate: string

  customCommitMessage: string

  /** comment template when pull requests from forks are unformatted */
  customPrettificationNotification: string

  /** names of the branches that should not be prettified */
  excludeBranches: string[]

  /** names of files that should not be prettified */
  excludeFiles: string[]

  /** whether to only prettify branches that are under code review */
  pullsOnly: boolean
}
