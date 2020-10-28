import { assert } from "chai"

import { bodyTemplate, DevError } from "./dev-error"

suite("DevError", function () {
  test("constructor()", function () {
    const cause = new Error("cause")
    const context = { foo: "bar" }
    const e = new DevError("activity", cause, context)
    assert.equal(e.message, "activity")
    assert.equal(e.cause, cause)
    assert.equal(e.context, context)
  })

  test("bodyTemplate()", function () {
    const actual = bodyTemplate(new DevError("activity", new Error(), { foo: "bar" }))
    assert.isNotEmpty(actual)
  })

  test("enrich", function () {
    const cause = new Error("cause")
    const context = { foo: "bar" }
    const e = new DevError("activity", cause, context)
    e.enrich({ one: 1, two: 2, foo: "not used" })
    assert.equal(e.context.foo, "bar")
    assert.equal(e.context.one, 1)
    assert.equal(e.context.two, 2)
  })
})
