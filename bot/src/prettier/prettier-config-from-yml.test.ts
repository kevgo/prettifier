import { prettierConfigFromYML } from "./prettier-config-from-yml"
import { assert } from "chai"
import { UserError } from "../logging/user-error"

suite("prettierConfigFromYML", function () {
  test("empty", function () {
    const actual = prettierConfigFromYML("")
    assert.deepEqual(actual, {})
  })

  test("valid content", function () {
    const actual = prettierConfigFromYML("semi: false")
    assert.deepEqual(actual, { semi: false })
  })

  test("invalid content", function () {
    assert.throws(function () {
      prettierConfigFromYML("'wrong")
    }, UserError)
  })
})
