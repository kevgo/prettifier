import { parsePushContextData } from "./on-push"
import { PushContextData } from "./github/load-push-context-data"
import { assert } from "chai"
import { PrettifierConfiguration } from "./config/prettifier-configuration"

suite("parsePushContextData", function () {
  test("empty", function () {
    const data: PushContextData = {
      prettifierConfig: "",
      prettierConfig: "",
      prettierIgnore: "",
      pullRequestNumber: 0,
      pullRequestId: "",
      pullRequestURL: "",
    }
    const actual = parsePushContextData(data)
    assert.deepEqual(actual.prettierConfig, {})
    assert.instanceOf(actual.prettifierConfig, PrettifierConfiguration)
    assert.equal(actual.pullRequestNumber, 0)
  })

  test("with content", function () {
    const data: PushContextData = {
      prettifierConfig: "excludeFiles: dist",
      prettierConfig: "semi: false",
      prettierIgnore: "",
      pullRequestNumber: 3,
      pullRequestId: "id",
      pullRequestURL: "url",
    }
    const actual = parsePushContextData(data)
    assert.deepEqual(actual.prettierConfig, { semi: false })
    assert.instanceOf(actual.prettifierConfig, PrettifierConfiguration)
    assert.deepEqual(actual.prettifierConfig.excludeFiles, ["dist"])
    assert.equal(actual.pullRequestNumber, 3)
    assert.equal(actual.pullRequestId, "id")
    assert.equal(actual.pullRequestURL, "url")
  })
})
