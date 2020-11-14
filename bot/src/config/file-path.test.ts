import { assert } from "chai"

import * as botConfig from "."

suite("isConfigurationFile", function () {
  test("matches", function () {
    assert.isTrue(botConfig.filePath(".prettierrc"))
    assert.isTrue(botConfig.filePath(".github/prettifier.yml"))
  })

  test("files in subfolders don't count", function () {
    assert.isFalse(botConfig.filePath("sub/.prettierrc"))
    assert.isFalse(botConfig.filePath("sub/.github/prettifier.yml"))
  })

  test("mismatching filenames", function () {
    assert.isFalse(botConfig.filePath(".foorc"))
    assert.isFalse(botConfig.filePath(".github/foo.yml"))
    assert.isFalse(botConfig.filePath(".prettifier.yml"))
    assert.isFalse(botConfig.filePath("prettifier.yml"))
    assert.isFalse(botConfig.filePath("prettierrc"))
  })
})
