import { assert } from "chai"

import { format } from "./format"

suite("prettier.format", function () {
  test("no options", function () {
    assert.equal(format("a  =1", "filename.ts", {}), "a = 1;\n")
  })
})
