import { promises as fs } from "fs"
import ignore, { Ignore } from "ignore"
import yml from "js-yaml"
import path from "path"
import prettier from "prettier"

import { UserError } from "../logging/user-error"
import * as templates from "../templates"

/** ConfigOptions defines the configuration options that users can provide. */
interface ConfigOptions {
  commitMessage?: string
  excludeBranches?: string[] | string
  excludeFiles?: string[] | string
  forkCommentEnabled?: boolean
  forkCommentTemplate?: string
  prettificationNotificationEnabled?: boolean
  prettificationNotificationTemplate?: string
  pullsOnly?: boolean
}

/** PrettifierConfiguration provides the configuration of Prettifier. */
export class PrettifierConfiguration {
  private customCommitMessage: string

  /** names of the branches that should not be prettified */
  excludeBranches: string[]

  /** names of files that should not be prettified */
  excludeFiles: string[]

  /** template for comments on the pull request */
  forkCommentEnabled: boolean

  /** template for comments on the pull request */
  customForkComment: string

  prettificationNotificationEnabled: boolean

  /** comment template when pull requests from forks are unformatted */
  private customPrettificationNotification: string

  /** whether to only prettify branches that are under code review */
  pullsOnly: boolean

  /** helps check whether a file path should be ignored */
  ignore: Ignore

  /**
   * Creates a new configuration based on the given config object.
   * Missing values are backfilled with default values.
   */
  constructor(providedConfig: ConfigOptions, prettierIgnore: string) {
    this.customForkComment = providedConfig.forkCommentTemplate ?? ""
    this.forkCommentEnabled = providedConfig.forkCommentEnabled ?? true
    this.customCommitMessage = providedConfig.commitMessage ?? ""
    if (Array.isArray(providedConfig.excludeBranches)) {
      this.excludeBranches = providedConfig.excludeBranches
    } else if (!providedConfig.excludeBranches) {
      this.excludeBranches = ["node_modules"]
    } else {
      this.excludeBranches = [providedConfig.excludeBranches]
    }
    if (Array.isArray(providedConfig.excludeFiles)) {
      this.excludeFiles = providedConfig.excludeFiles
    } else if (!providedConfig.excludeFiles) {
      this.excludeFiles = ["package-lock.json"]
    } else {
      this.excludeFiles = [providedConfig.excludeFiles]
    }
    this.prettificationNotificationEnabled = providedConfig.prettificationNotificationEnabled ?? false
    this.customPrettificationNotification = providedConfig.prettificationNotificationTemplate ?? ""
    this.ignore = ignore().add(this.excludeFiles).add(prettierIgnore)
    this.pullsOnly = providedConfig.pullsOnly ?? false
  }

  /** provides a PrettifierConfiguration instance populated with the values in the given YML file */
  static fromYML(configText: string, prettierIgnore: string): PrettifierConfiguration {
    if (configText.trim() === "") {
      return new PrettifierConfiguration({}, prettierIgnore)
    }
    try {
      var parsed = yml.safeLoad(configText) as Record<string, unknown>
    } catch (e) {
      throw new UserError(
        `Prettifier configuration is not valid YML`,
        `File \`.github/prettifier.yml\` contains this invalid content:\n\n\`\`\`\n${configText}\n\`\`\`\n`,
        e
      )
    }
    for (const key of ["prettification-notification", "prettification_notification", "prettificationNotification"]) {
      if (parsed[key]) {
        parsed.prettificationNotificationTemplate = parsed[key]
        parsed.prettificationNotificationEnabled = true
        delete parsed[key]
      }
    }
    for (const key of [
      "prettification-notification-template",
      "prettification_notification_template",
      "prettificationNotificationTemplate",
    ]) {
      if (parsed[key]) {
        parsed.prettificationNotificationTemplate = parsed[key]
        delete parsed[key]
      }
    }
    for (const key of [
      "prettification-notification-enabled",
      "prettification_notification_enabled",
      "prettificationNotificationEnabled",
    ]) {
      if (parsed[key]) {
        parsed.prettificationNotificationEnabled = parsed[key]
        delete parsed[key]
      }
    }
    return new PrettifierConfiguration(parsed, prettierIgnore)
  }

  async commitMessageTemplate(): Promise<string> {
    if (this.customCommitMessage !== "") {
      return this.customCommitMessage
    }
    const defaultCommitMessage = await fs.readFile(
      path.join("src", "config", "default-commit-message.md.mustache"),
      "utf-8"
    )
    return defaultCommitMessage.trim()
  }

  /** provides the forkComment template to use */
  async forkCommentTemplate(): Promise<string> {
    if (this.customForkComment !== "") {
      return this.customForkComment
    } else {
      return fs.readFile(path.join("src", "config", "default-fork-comment.md.mustache"), "utf-8")
    }
  }

  async forkCommentText(): Promise<string> {
    return await this.forkCommentTemplate()
  }

  /** provides the prettification notification template to use */
  async prettificationNotificationTemplate(): Promise<string> {
    if (this.customPrettificationNotification !== "") {
      return this.customPrettificationNotification
    }
    const defaultTemplate = await fs.readFile(
      path.join("src", "config", "default-prettification-notification.md.mustache"),
      "utf-8"
    )
    return defaultTemplate
  }

  async prettificationNotificationText(options: { files: string[] }): Promise<string> {
    return templates.render(await this.prettificationNotificationTemplate(), options)
  }

  /** Indicates whether the given branch should be ignored. */
  shouldIgnoreBranch(branchName: string): boolean {
    return this.excludeBranches.includes(branchName)
  }

  /** Indicates whether the given file should be prettified. */
  async shouldPrettify(filename: string): Promise<boolean> {
    // check whether the filename is listed as ignored
    if (this.ignore.ignores(filename)) {
      return false
    }

    // check whether Prettifier thinks it can handle the file
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
