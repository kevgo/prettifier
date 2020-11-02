import mustache from "mustache"

/** Placeholders defines the placeholders in comment templates. */
interface Placeholders {
  /** the SHA of the latest commit pushed */
  commitSha?: string

  /** list of the changed files with formatting problems */
  files?: string[]
}

export function render(template: string, placeholders: Placeholders): string {
  const data = placeholders as any
  data.PrettifierLink = "[Prettifier](https://prettifier.io)"
  data.PrettifierContactURL = "https://github.com/kevgo/prettifier/issues/new"
  mustache.escape = (text: string) => text
  return mustache.render(template, data)
}
