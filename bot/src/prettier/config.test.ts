import { getPrettierConfig, prettierConfigFromJSON, prettierConfigFromYML } from "./config"
import { assert } from "chai"
import { UserError } from "../logging/user-error"
import { PushContextData } from "../github/load-push-context-data"

suite("getPrettierConfig", function () {
  test("none given", function () {
    const give = scaffoldPushContextData()
    const have = getPrettierConfig(give)
    assert.deepEqual(have, {})
  })
  test("prettierrc with JSON content", function () {
    const give = scaffoldPushContextData({ prettierrc: `{ "semi": false }` })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("prettierrc with YML content", function () {
    const give = scaffoldPushContextData({ prettierrc: `semi: false` })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("prettierrc_json with valid content", function () {
    const give = scaffoldPushContextData({ prettierrc_json: `{ "semi": false }` })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("prettierrc_json with invalid content", function () {
    const give = scaffoldPushContextData({ prettierrc_json: `{ "semi` })
    assert.throws(() => getPrettierConfig(give), UserError)
  })
  test("prettierrc_toml with valid content", function () {
    const give = scaffoldPushContextData({ prettierrc_toml: `semi = false` })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("prettierrc_toml with invalid content", function () {
    const give = scaffoldPushContextData({ prettierrc_toml: `{ semi =` })
    assert.throws(() => getPrettierConfig(give), UserError)
  })
  test("prettierrc_yml with valid content", function () {
    const give = scaffoldPushContextData({ prettierrc_yml: `semi: false` })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("prettierrc_yml with invalid content", function () {
    const give = scaffoldPushContextData({ prettierrc_yml: `"semi` })
    assert.throws(() => getPrettierConfig(give), UserError)
  })
  test("prettierrc_yaml with valid content", function () {
    const give = scaffoldPushContextData({ prettierrc_yaml: `semi: false` })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("prettierrc_yaml with invalid content", function () {
    const give = scaffoldPushContextData({ prettierrc_yaml: `"semi` })
    assert.throws(() => getPrettierConfig(give), UserError)
  })
})

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

suite("prettierConfigFromJSON", function () {
  test("empty", function () {
    const actual = prettierConfigFromJSON("")
    assert.deepEqual(actual, {})
  })

  test("valid content", function () {
    const actual = prettierConfigFromJSON(`{ "semi": false }`)
    assert.deepEqual(actual, { semi: false })
  })

  test("invalid content", function () {
    assert.throws(function () {
      prettierConfigFromJSON("'wrong")
    }, UserError)
  })
})

function scaffoldPushContextData(testData: Partial<PushContextData> = {}): PushContextData {
  const result = {
    prettierIgnore: "",
    prettierrc: "",
    prettierrc_json: "",
    prettierrc_toml: "",
    prettierrc_yaml: "",
    prettierrc_yml: "",
    prettifierConfig: "",
    pullRequestId: "",
    pullRequestNumber: 0,
    pullRequestURL: "",
  }
  return { ...result, ...testData }
}
