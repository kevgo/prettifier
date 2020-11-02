import prettier from "prettier"

/** Formats the given content for the given file using the given Prettier configuration. */
export function format(text: string, filename: string, prettierConfig: prettier.Options): string {
  try {
    return prettier.format(text, { ...prettierConfig, filepath: filename })
  } catch (e) {
    return text
  }
}
