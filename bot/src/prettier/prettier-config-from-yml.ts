import yml from "js-yaml"
import { UserError } from "../logging/user-error"
import prettier from "prettier"

/** Returns a PrettierConfiguration with the given content */
export function prettierConfigFromYML(configText: string): prettier.Options {
  try {
    return yml.safeLoad(configText) || {}
  } catch (e) {
    throw new UserError("invalid content in file '.prettierrc'", e)
  }
}
