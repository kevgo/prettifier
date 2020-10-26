import { PullRequestContextData } from "./github/load-pull-request-context-data"
import { assert } from "chai"
import { PrettifierConfiguration } from "./config/prettifier-configuration"
import { parsePullRequestContextData } from "./on-pull-request"

suite("parsePullRequestContextData", function () {
  test("empty", function () {
    const data: PullRequestContextData = {
      prettifierConfig: "",
      prettierConfig: "",
      prettierIgnore: "",
    }
    const actual = parsePullRequestContextData(data)
    assert.deepEqual(actual.prettierConfig, {})
    assert.instanceOf(actual.prettifierConfig, PrettifierConfiguration)
  })

  test("with content", function () {
    const data: PullRequestContextData = {
      prettifierConfig: "excludeFiles: dist",
      prettierConfig: "semi: false",
      prettierIgnore: "",
    }
    const actual = parsePullRequestContextData(data)
    assert.deepEqual(actual.prettierConfig, { semi: false })
    assert.deepEqual(actual.prettifierConfig.excludeFiles, ["dist"])
  })
})
