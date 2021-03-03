import prettier from "prettier"

export async function shouldPrettify(filename: string): Promise<boolean> {
  const result = await prettier.getFileInfo(filename)
  return !result.ignored
}
