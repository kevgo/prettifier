import { assert } from "chai"

import * as templates from "."

suite("formatCommitMessage", function () {
  test("without placeholder", function () {
    assert.equal(templates.render("hello", {}), "hello")
  })

  test("commitSha placeholder", function () {
    assert.equal(templates.render("hello {{commitSha}}", { commitSha: "SHA" }), "hello SHA")
  })

  test("files placeholder", function () {
    const give = `{{#files}}
- {{.}}
{{/files}}`
    assert.equal(templates.render(give, { files: ["one", "two"] }), "- one\n- two\n")
  })

  test("PrettifierLink placeholder", function () {
    assert.equal(templates.render("{{PrettifierLink}}", {}), "[Prettifier](https://prettifier.io)")
  })

  test("PrettifierContactLink placeholder", function () {
    assert.equal(templates.render("{{PrettifierContactURL}}", {}), "https://github.com/kevgo/prettifier/issues/new")
  })
})
