import * as config from "."

/** provides the default values, with the given overrides applied */
export function defaultValues(): config.Data {
  return {
    commentTemplate: "",
    customCommitMessage: "",
    customPrettificationNotification: "",
    excludeBranches: [],
    excludeFiles: [],
    pullsOnly: false,
  }
}
