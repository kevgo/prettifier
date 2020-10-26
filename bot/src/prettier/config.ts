import yml from "js-yaml"
import { UserError } from "../logging/user-error"
import prettier from "prettier"
import * as TOML from "@iarna/toml"
import * as JSON5 from "json5"

export interface PrettierConfigResult {
  package_json: string
  prettierrc: string
  prettierrc_json: string
  prettierrc_json5: string
  prettierrc_toml: string
  prettierrc_yml: string
  prettierrc_yaml: string
}

export function getPrettierConfig(result: PrettierConfigResult): prettier.Options {
  switch (true) {
    case result.prettierrc !== "":
      return prettierConfigFromYML(result.prettierrc)
    case result.prettierrc_json !== "":
      return prettierConfigFromJSON5(result.prettierrc_json)
    case result.prettierrc_json5 !== "":
      return prettierConfigFromJSON5(result.prettierrc_json5)
    case result.prettierrc_toml !== "":
      return prettierConfigFromTOML(result.prettierrc_toml)
    case result.prettierrc_yml !== "":
      return prettierConfigFromYML(result.prettierrc_yml)
    case result.prettierrc_yaml !== "":
      return prettierConfigFromYML(result.prettierrc_yaml)
    case result.package_json !== "":
      return prettierConfigFromPackageJson(result.package_json)
    default:
      return {}
  }
}

/** parses the given JSON into Prettier options */
export function prettierConfigFromJSON5(configText: string): prettier.Options {
  try {
    const parsed = JSON5.parse(configText || "{}")
    return parsed as Record<string, unknown>
  } catch (e) {
    throw new UserError("invalid content in file `.prettierrc`", `\`\`\`\n${configText}\n\`\`\`\n`, e)
  }
}

/** parses the given package.json into Prettier options */
export function prettierConfigFromPackageJson(configText: string): prettier.Options {
  try {
    const parsed = JSON.parse(configText || "{}")
    return parsed.prettier || {}
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
