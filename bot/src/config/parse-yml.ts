import yml from "js-yaml"

import { UserError } from "../logging/user-error"
import * as config from "."

/** provides the Data containing the configuration settings in the given configuration file content */
export function parseYML(configText: string): config.Data {
  const defaults = config.defaultValues()
  if (configText.trim() === "") {
    return defaults
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
  if (parsed["prettification-notification"]) {
    parsed.prettificationNotification = parsed["prettification-notification"]
    delete parsed["prettification-notification"]
  }
  if (parsed["prettification_notification"]) {
    parsed.prettificationNotification = parsed["prettification_notification"]
    delete parsed["prettification_notification"]
  }
  let excludeBranches = new Array<string>()
  if (Array.isArray(parsed.excludeBranches)) {
    excludeBranches = parsed.excludeBranches.map(String)
  } else if (parsed.excludeBranches == null) {
    excludeBranches = ["node_modules"]
  } else if (typeof parsed.excludeBranches === "string") {
    excludeBranches = [parsed.excludeBranches]
  } else {
    throw new UserError(
      `Unexpected value for Prettifier configuration setting "excludeBranches"`,
      "This setting should be an array of string",
      new Error(`unexpected type "${typeof parsed.excludeBranches}`),
      { configText }
    )
  }

  let excludeFiles = new Array<string>()
  if (Array.isArray(parsed.excludeFiles)) {
    excludeFiles = parsed.excludeFiles.map(String)
  } else if (parsed.excludeFiles == null) {
    excludeFiles = ["package-lock.json"]
  } else if (typeof parsed.excludeFiles === "string") {
    excludeFiles = [parsed.excludeFiles]
  } else {
    throw new UserError(
      `Unexpected value for Prettifier configuration setting "excludeFiles"`,
      "This setting should be an array of string",
      new Error(`unexpected type "${typeof parsed.excludeFiles}`),
      { configText }
    )
  }
  let pullsOnly = false
  if (typeof parsed.pullsOnly === "boolean") {
    pullsOnly = parsed.pullsOnly
  } else if (parsed.pullsOnly == null) {
    pullsOnly = defaults.pullsOnly
  } else {
    throw new UserError(
      `Unexpected value for Prettifier configuration setting "pullsOnly"`,
      "This setting should be a boolean value",
      new Error(`unexpected type "${typeof parsed.pullsOnly}`),
      { configText }
    )
  }

  return {
    commentTemplate: String(parsed.commentTemplate ?? defaults.commentTemplate),
    customCommitMessage: String(parsed.commitMessage ?? defaults.customCommitMessage),
    customPrettificationNotification: String(
      parsed.prettificationNotification ?? defaults.customPrettificationNotification
    ),
    excludeBranches,
    excludeFiles,
    pullsOnly,
  }
}
