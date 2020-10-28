import ignore, { Ignore } from "ignore"
import prettier from "prettier"
import { promises as fs } from "fs"
import path from "path"
import yml from "js-yaml"
import { UserError } from "../logging/user-error"

/** ConfigOptions defines the configuration options that users can provide. */
interface ConfigOptions {
  commentTemplate?: string
  commitMessage?: string
  excludeBranches?: string[] | string
  excludeFiles?: string[] | string
  welcome?: string
  pullsOnly?: boolean
}

/** PrettifierConfiguration provides the configuration of Prettifier. */
export class PrettifierConfiguration {
  /** template for comments on the pull request */
  commentTemplate: string

  private customCommitMessage: string

  /** names of the branches that should not be prettified */
  excludeBranches: string[]

  /** names of files that should not be prettified */
  excludeFiles: string[]

  /** comment template when pull requests from forks are unformatted */
  private customWelcome: string

  /** whether to only prettify branches that are under code review */
  pullsOnly: boolean

  /** helps check whether a file path should be ignored */
  ignore: Ignore

  /**
   * Creates a new configuration based on the given config object.
   * Missing values are backfilled with default values.
   */
  constructor(providedConfig: ConfigOptions, prettierIgnore: string) {
    this.commentTemplate = providedConfig.commentTemplate ?? ""
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
    this.customWelcome = providedConfig.welcome ?? ""
    this.ignore = ignore().add(this.excludeFiles).add(prettierIgnore)
    this.pullsOnly = providedConfig.pullsOnly ?? false
  }

  /** provides a PrettifierConfiguration instance populated with the values in the given YML file */
  static fromYML(configText: string, prettierIgnore: string): PrettifierConfiguration {
    if (configText.trim() === "") {
      return new PrettifierConfiguration({}, prettierIgnore)
    }
    let parsed = {}
    try {
      parsed = yml.safeLoad(configText) as Record<string, unknown>
    } catch (e) {
      throw new UserError(
        `Prettifier configuration is not valid YML`,
        `File \`.github/prettifier.yml\` contains this invalid content:\n\n\`\`\`\n${configText}\n\`\`\`\n`,
        e
      )
    }
    return new PrettifierConfiguration(parsed, prettierIgnore)
  }

  async welcome(): Promise<string> {
    if (this.customWelcome !== "") {
      return this.customWelcome
    }
    const defaultWelcome = await fs.readFile(path.join("src", "config", "default-welcome.md.mustache"), "utf-8")
    return defaultWelcome
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

  async commitMessage(): Promise<string> {
    if (this.customCommitMessage !== "") {
      return this.customCommitMessage
    }
    const defaultCommitMessage = await fs.readFile(
      path.join("src", "config", "default-commit-message.md.mustache"),
      "utf-8"
    )
    return defaultCommitMessage.trim()
  }
}
