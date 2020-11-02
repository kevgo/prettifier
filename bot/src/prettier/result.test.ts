import { assert } from "chai"

import * as prettier from "."

suite("prettier.Result", function () {
  test("paths", function () {
    const pfs = new prettier.Result()
    pfs.push({ path: "two.md", old: "", formatted: "" })
    pfs.push({ path: "one.md", old: "", formatted: "" })
    const have = pfs.paths()
    const want = ["one.md", "two.md"]
    assert.deepEqual(have, want)
  })
})
