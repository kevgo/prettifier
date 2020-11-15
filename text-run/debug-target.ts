import { promises as fs } from "fs"
import * as tr from "text-runner"
import * as path from "path"
import * as util from "util"

export async function debugTarget(activity: tr.actions.Args) {
  const want = activity.region.text()
  const config = JSON.parse(await fs.readFile(path.join(__dirname, "..", "bot", ".vscode", "launch.json"), "utf-8"))
  const have = config.configurations.map((config: any) => config.name) as string[]
  if (!have.includes(want)) {
    throw new Error(`Expected "${util.inspect(have, false, 2)}" to include "${want}"`)
  }
}
