import { assert } from "chai"
import { concatToSet, removeAllFromSet } from "./set-tools"

suite("concatToSet", function () {
  test("adding values", function () {
    const s = new Set<string>()
    concatToSet(s, ["one", "two"])
    concatToSet(s, ["one", "three"])
    assert.deepEqual(["one", "two", "three"], Array.from(s))
  })
})

suite("removeAllFromSet", function () {
  test("removing values", function () {
    const s = new Set<string>()
    s.add("one")
    s.add("three")
    removeAllFromSet(s, ["one", "two"])
    assert.deepEqual(["three"], Array.from(s))
  })
})
