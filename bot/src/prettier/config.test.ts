import { getPrettierConfig, prettierConfigFromJSON5, prettierConfigFromYML } from "./config"
import { assert } from "chai"
import { UserError } from "../logging/user-error"
import { PushContextData } from "../github/load-push-context-data"

suite("getPrettierConfig", function () {
  test("none given", function () {
    const give = scaffoldPushContextData()
    const have = getPrettierConfig(give)
    assert.deepEqual(have, {})
  })
  test("package_json with valid content", function () {
    const give = scaffoldPushContextData({
      package_json: `{
  "name": "foo",
  "prettier": {
    "semi": false
  }
}`,
    })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("package_json with empty content", function () {
    const give = scaffoldPushContextData({
      package_json: `{
  "name": "foo",
  "prettier": {}
}`,
    })
    const have = getPrettierConfig(give)
    assert.deepEqual(have, {})
  })
  test("package_json with no content", function () {
    const give = scaffoldPushContextData({
      package_json: `{
  "name": "foo"
}`,
    })
    const have = getPrettierConfig(give)
    assert.deepEqual(have, {})
  })
  test("package_json with invalid content", function () {
    const give = scaffoldPushContextData({ package_json: `"semi` })
    assert.throws(() => getPrettierConfig(give), UserError)
  })
  test("prettierrc with valid JSON content", function () {
    const give = scaffoldPushContextData({ prettierrc: `{ "semi": false }` })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("prettierrc with valid YML content", function () {
    const give = scaffoldPushContextData({ prettierrc: `semi: false` })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("prettierrc with invalid content", function () {
    const give = scaffoldPushContextData({ prettierrc: `{ "semi` })
    assert.throws(() => getPrettierConfig(give), UserError)
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
  test("prettierrc_json5 with valid content", function () {
    const give = scaffoldPushContextData({ prettierrc_json5: `{ 'semi': false \n // comment\n }` })
    const have = getPrettierConfig(give)
    const want = { semi: false }
    assert.deepEqual(have, want)
  })
  test("prettierrc_json5 with invalid content", function () {
    const give = scaffoldPushContextData({ prettierrc_json5: `{ "semi` })
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

suite("prettierConfigFromJSON5", function () {
  test("empty", function () {
    const actual = prettierConfigFromJSON5("")
    assert.deepEqual(actual, {})
  })

  test("valid content", function () {
    const actual = prettierConfigFromJSON5(`{ "semi": false }`)
    assert.deepEqual(actual, { semi: false })
  })

  test("invalid content", function () {
    assert.throws(function () {
      prettierConfigFromJSON5("'wrong")
    }, UserError)
  })
})

function scaffoldPushContextData(testData: Partial<PushContextData> = {}): PushContextData {
  const result = {
    prettierIgnore: "",
    package_json: "",
    prettierrc: "",
    prettierrc_json: "",
    prettierrc_json5: "",
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
