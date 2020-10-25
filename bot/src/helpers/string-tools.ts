/** provides the first line of the given text with truncation indicator */
export function firstLineWithPill(text: string): string {
  const firstNewLinePos = text.indexOf("\n")
  if (firstNewLinePos === -1) {
    return text
  } else {
    return text.substring(0, firstNewLinePos) + "..."
  }
}
