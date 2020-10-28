import * as TOML from "@iarna/toml"
import yml from "js-yaml"
import JSON5 from "json5"
import prettier from "prettier"

import { UserError } from "../logging/user-error"

export interface PrettierConfigResult {
  package_json: string
  prettierrc: string
  prettierrc_json: string
  prettierrc_json5: string
  prettierrc_toml: string
  prettierrc_yaml: string
  prettierrc_yml: string
}

export function getPrettierConfig(result: PrettierConfigResult): prettier.Options {
  return (
    loadConfig(result.prettierrc, ".prettierrc", parseYML) ||
    // eslint-disable-next-line @typescript-eslint/unbound-method
    loadConfig(result.prettierrc_json, ".prettierrc.json", JSON5.parse) ||
    // eslint-disable-next-line @typescript-eslint/unbound-method
    loadConfig(result.prettierrc_json5, ".prettierrc.json5", JSON5.parse) ||
    loadConfig(result.prettierrc_toml, ".prettierrc.toml", TOML.parse) ||
    loadConfig(result.prettierrc_yml, ".prettierrc.yml", parseYML) ||
    loadConfig(result.prettierrc_yaml, ".prettierrc.yaml", parseYML) ||
    loadConfig(result.package_json, "package.json", parsePackageJson) ||
    {}
  )
}

function parseYML(text: string): Record<string, unknown> {
  return yml.safeLoad(text) as Record<string, unknown>
}

function loadConfig(
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
