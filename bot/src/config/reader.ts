import { promises as fs } from "fs"
import ignore, { Ignore } from "ignore"
import path from "path"
import prettier from "prettier"

import * as config from "."

/** high-level queries of configuration data */
export class Reader {
  /** the configuration data */
  data: config.Data

  /** helps check whether a file path should be ignored */
  private ignore: Ignore

  constructor(data: config.Data, prettierIgnore: string) {
    this.data = data
    this.ignore = ignore().add(data.excludeFiles).add(prettierIgnore)
  }

  /** Provides the prettification notification template */
  async prettificationNotification(): Promise<string> {
    if (this.data.customPrettificationNotification !== "") {
      return this.data.customPrettificationNotification
    }
    const defaultTemplate = await fs.readFile(
      path.join("src", "config", "default-prettification-notification.md.mustache"),
      "utf-8"
    )
    return defaultTemplate
  }

  /** Indicates whether the given branch should be ignored. */
  shouldIgnoreBranch(branchName: string): boolean {
    return this.data.excludeBranches.includes(branchName)
  }

  /** Indicates whether the given file should be prettified. */
  async shouldPrettify(filename: string): Promise<boolean> {
    // check whether the filename is listed as ignored
    if (this.ignore.ignores(filename)) {
      return false
    }

    // check whether Prettier can handle the file
    const result = await prettier.getFileInfo(filename)
    if (result.ignored) {
      // this somehow always returns false,
      // seems to be influenced by Prettier config
      return false
    }
    if (!result.inferredParser) {
      // whether Prettier has a parser for this file type
      // seems to indicate better whether Prettier can handle the file
      return false
    }
    return true
  }

  async commitMessageTemplate(): Promise<string> {
    if (this.data.customCommitMessage !== "") {
      return this.data.customCommitMessage
    }
    const defaultCommitMessage = await fs.readFile(
      path.join("src", "config", "default-commit-message.md.mustache"),
      "utf-8"
    )
    return defaultCommitMessage.trim()
  }
}
