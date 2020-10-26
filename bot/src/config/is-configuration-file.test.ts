import { assert } from "chai"
import { isConfigurationFile } from "./is-configuration-file"

suite("isConfigurationFile", function () {
  test("matches", function () {
    assert.isTrue(isConfigurationFile(".prettierrc"), ".prettierrc")
    assert.isTrue(isConfigurationFile(".github/prettifier.yml"), ".github/prettifier.yml")
  })

  test("files in subfolders don't count", function () {
    assert.isFalse(isConfigurationFile("sub/.prettierrc"))
    assert.isFalse(isConfigurationFile("sub/.github/prettifier.yml"))
  })

  test("mismatching filenames", function () {
    assert.isFalse(isConfigurationFile(".foorc"))
    assert.isFalse(isConfigurationFile(".github/foo.yml"))
    assert.isFalse(isConfigurationFile(".prettifier.yml"))
    assert.isFalse(isConfigurationFile("prettifier.yml"))
    assert.isFalse(isConfigurationFile("prettierrc"))
  })
})
