import { assert } from "chai"

import prettier from "."

suite("shouldPrettify", function () {
  const tests = {
    "test.png": true,
  }
  for (const [give, want] of Object.entries(tests)) {
    test(`${give} --> ${want}`, async function () {
      const have = await prettier.shouldPrettify(give)
      assert.equal(have, want)
    })
  }
})
