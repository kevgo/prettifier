import yml from "js-yaml"
import { UserError } from "../logging/user-error"
import prettier from "prettier"

/** Returns a PrettierConfiguration with the given content */
export function prettierConfigFromYML(configText: string): prettier.Options {
  try {
    const parsed = yml.safeLoad(configText) || {}
    return parsed as Record<string, unknown>
  } catch (e) {
    throw new UserError("invalid content in file `.prettierrc`", `\`\`\`\n${configText}\n\`\`\`\n`, e)
  }
}
