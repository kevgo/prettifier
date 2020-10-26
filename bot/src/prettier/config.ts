import yml from "js-yaml"
import { UserError } from "../logging/user-error"
import prettier from "prettier"
import * as TOML from "@iarna/toml"

export interface PrettierConfigResult {
  prettierrc: string
  prettierrc_json: string
  prettierrc_toml: string
  prettierrc_yml: string
  prettierrc_yaml: string
}

export function getPrettierConfig(result: PrettierConfigResult): prettier.Options {
  switch (true) {
    case result.prettierrc !== "":
      return prettierConfigFromYML(result.prettierrc)
    case result.prettierrc_json !== "":
      return prettierConfigFromJSON(result.prettierrc_json)
    case result.prettierrc_toml !== "":
      return prettierConfigFromTOML(result.prettierrc_toml)
    case result.prettierrc_yml !== "":
      return prettierConfigFromYML(result.prettierrc_yml)
    case result.prettierrc_yaml !== "":
      return prettierConfigFromYML(result.prettierrc_yaml)
    default:
      return {}
  }
}

/** parses the given JSON into Prettier options */
export function prettierConfigFromJSON(configText: string): prettier.Options {
  try {
    const parsed = JSON.parse(configText || "{}")
    return parsed as Record<string, unknown>
  } catch (e) {
    throw new UserError("invalid content in file `.prettierrc`", `\`\`\`\n${configText}\n\`\`\`\n`, e)
  }
}

/** parses the given YML text into Prettier options */
export function prettierConfigFromTOML(configText: string): prettier.Options {
  try {
    const parsed = TOML.parse(configText) || {}
    return parsed as Record<string, unknown>
  } catch (e) {
    throw new UserError("invalid content in file `.prettierrc`", `\`\`\`\n${configText}\n\`\`\`\n`, e)
  }
}

/** parses the given YML text into Prettier options */
export function prettierConfigFromYML(configText: string): prettier.Options {
  try {
    const parsed = yml.safeLoad(configText) || {}
    return parsed as Record<string, unknown>
  } catch (e) {
    throw new UserError("invalid content in file `.prettierrc`", `\`\`\`\n${configText}\n\`\`\`\n`, e)
  }
}
