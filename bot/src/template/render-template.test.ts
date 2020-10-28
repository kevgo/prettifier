import { assert } from "chai"

import { renderTemplate } from "./render-template"

suite("formatCommitMessage", function () {
  test("without placeholder", function () {
    assert.equal(renderTemplate("hello", {}), "hello")
  })

  test("commitSha placeholder", function () {
    assert.equal(renderTemplate("hello {{commitSha}}", { commitSha: "SHA" }), "hello SHA")
  })

  test("files placeholder", function () {
    const template = `{{#files}}
- {{.}}
{{/files}}`
    assert.equal(renderTemplate(template, { files: ["one", "two"] }), "- one\n- two\n")
  })

  test("PrettifierLink placeholder", function () {
    assert.equal(renderTemplate("{{PrettifierLink}}", {}), "[Prettifier](https://prettifier.io)")
  })

  test("PrettifierContactLink placeholder", function () {
    assert.equal(renderTemplate("{{PrettifierContactURL}}", {}), "https://github.com/kevgo/prettifier/issues/new")
  })
})
