import * as TOML from "@iarna/toml"
import yml from "js-yaml"
import JSON5 from "json5"
import prettier from "prettier"

import { UserError } from "../logging/user-error"

export interface ConfigResult {
  readonly package_json: string
  readonly prettierrc: string
  readonly prettierrc_json: string
  readonly prettierrc_json5: string
  readonly prettierrc_toml: string
  readonly prettierrc_yaml: string
  readonly prettierrc_yml: string
}

export function loadConfig(result: ConfigResult): prettier.Options {
  return (
    loadConfigFile(result.prettierrc, ".prettierrc", parseYML) ||
    // eslint-disable-next-line @typescript-eslint/unbound-method
    loadConfigFile(result.prettierrc_json, ".prettierrc.json", JSON5.parse) ||
    // eslint-disable-next-line @typescript-eslint/unbound-method
    loadConfigFile(result.prettierrc_json5, ".prettierrc.json5", JSON5.parse) ||
    loadConfigFile(result.prettierrc_toml, ".prettierrc.toml", TOML.parse) ||
    loadConfigFile(result.prettierrc_yml, ".prettierrc.yml", parseYML) ||
    loadConfigFile(result.prettierrc_yaml, ".prettierrc.yaml", parseYML) ||
    loadConfigFile(result.package_json, "package.json", parsePackageJson) ||
    {}
  )
}

function parseYML(text: string): Record<string, unknown> {
  return yml.safeLoad(text) as Record<string, unknown>
}

function loadConfigFile(
  configText: string,
  filename: string,
  loader: (text: string, ...others: any) => Record<string, unknown>
): prettier.Options | undefined {
  if (configText === "") {
    return
  }
  try {
    return loader(configText)
  } catch (e) {
    throw new UserError(`invalid content in file "${filename}"`, `\`\`\`\n${configText}\n\`\`\`\n`, e)
  }
}

function parsePackageJson(configText: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(configText)
    return (parsed.prettier || {}) as Record<string, unknown>
  } catch (e) {
    throw new UserError("invalid content in file `.prettierrc`", `\`\`\`\n${configText}\n\`\`\`\n`, e)
  }
}
