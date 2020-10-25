import { assert } from "chai"
import { firstLineWithPill } from "./string-tools"

suite("string-tools.firstLineWithPill")

test("one line", function () {
  const have = firstLineWithPill("the text")
  assert.equal(have, "the text")
})

test("multiple lines", function () {
  const have = firstLineWithPill("the text\nmore text")
  assert.equal(have, "the text...")
})
