import ignore, { Ignore } from "ignore"
import prettier from "prettier"

import * as templates from "../templates"
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

  commentText(args: { files: string[] }): string {
    return templates.render(this.data.commentTemplate, args)
  }

  commitMessageText(args: { commitSha: string; files: string[] }): string {
    return templates.render(this.data.commitMessage, args)
  }

  prettificationNotificationText(args: { files: string[] }): string {
    return templates.render(this.data.prettificationNotification, args)
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
}
