import { UserError, bodyTemplate } from "./user-error"
import { assert } from "chai"

suite("UserError", function () {
  test("constructor()", function () {
    const cause = new Error()
    const context = { foo: "bar" }
    const actual = new UserError("activity", "", cause, context)
    assert.equal(actual.message, "activity")
    assert.equal(actual.cause, cause)
    assert.equal(actual.context, context)
  })

  test("bodyTemplate()", function () {
    const actual = bodyTemplate(new UserError("activity", "", new Error(), {}))
    assert.isNotEmpty(actual)
  })

  test("enrich", function () {
    const cause = new Error("cause")
    const context = { foo: "bar" }
    const e = new UserError("activity", "", cause, context)
    e.enrich({ one: 1, two: 2, foo: "not used" })
    assert.equal(e.context.foo, "bar")
    assert.equal(e.context.one, 1)
    assert.equal(e.context.two, 2)
  })
})
