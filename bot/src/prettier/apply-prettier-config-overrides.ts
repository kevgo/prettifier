import minimatch from "minimatch"
import prettier from "prettier"

export function applyPrettierConfigOverrides(config: Record<string, any>, filename: string): prettier.Options {
  if (!config.overrides) {
    return config
  }
  const result = { ...config }
  for (const override of config.overrides) {
    if (minimatch(filename, override.files)) {
      for (const [key, value] of Object.entries(override.options)) {
        result[key] = value
      }
    }
  }
  delete result.overrides
  return result
}
