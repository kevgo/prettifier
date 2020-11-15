import { assert } from "chai"

import * as config from "."

suite("isConfigurationFile", function () {
  test("matches", function () {
    assert.isTrue(config.filePath(".prettierrc"))
    assert.isTrue(config.filePath(".github/prettifier.yml"))
  })

  test("files in subfolders don't count", function () {
    assert.isFalse(config.filePath("sub/.prettierrc"))
    assert.isFalse(config.filePath("sub/.github/prettifier.yml"))
  })

  test("mismatching filenames", function () {
    assert.isFalse(config.filePath(".foorc"))
    assert.isFalse(config.filePath(".github/foo.yml"))
    assert.isFalse(config.filePath(".prettifier.yml"))
    assert.isFalse(config.filePath("prettifier.yml"))
    assert.isFalse(config.filePath("prettierrc"))
  })
})
