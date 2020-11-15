import { promises as fs } from "fs"
import path from "path"

import * as config from "."

/** provides the default values, with the given overrides applied */
export async function defaultValues(): Promise<config.Data> {
  return {
    commentTemplate: await fs.readFile(
      path.join(__dirname, "default-prettification-notification.md.mustache"),
      "utf-8"
    ),
    commitMessage: await fs.readFile(path.join(__dirname, "default-commit-message.md.mustache"), "utf-8"),
    prettificationNotification: "",
    excludeBranches: [],
    excludeFiles: [],
    pullsOnly: false,
  }
}
