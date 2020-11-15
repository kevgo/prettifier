import { assert } from "chai"

import * as config from "."

suite("config.defaults()", function () {
  test("works", async function () {
    const defaults = await config.defaultValues()
    assert.isNotEmpty(defaults.commentTemplate)
    assert.isNotEmpty(defaults.commitMessage)
  })
})
