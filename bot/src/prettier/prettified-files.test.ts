import { assert } from "chai"

import { PrettifiedFiles } from "./prettified-files"

suite("PrettifiedFiles", function () {
  test("paths", function () {
    const pfs = new PrettifiedFiles()
    pfs.push({ path: "two.md", old: "", formatted: "" })
    pfs.push({ path: "one.md", old: "", formatted: "" })
    const have = pfs.paths()
    const want = ["one.md", "two.md"]
    assert.deepEqual(have, want)
  })
})
