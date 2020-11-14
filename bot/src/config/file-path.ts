/** indicates whether the given file path is for the Prettifier configuration file */
export function filePath(filePath: string): boolean {
  return filePath === ".github/prettifier.yml" || filePath === ".prettierrc"
}
