import { assert } from "chai"

import { UserError } from "../logging/user-error"
import * as config from "."

suite(".parseYML", function () {
  suite("excludeBranches", function () {
    test("empty", function () {
      const have = config.parseYML("")
      assert.deepEqual(have.excludeBranches, [])
    })

    test("defined in prettifier.yml", function () {
      const data = config.parseYML("excludeBranches: dist")
      assert.deepEqual(data.excludeBranches, ["dist"])
    })
  })

  suite("prettification notification", function () {
    test(".prettification-notification", function () {
      const have = config.parseYML("prettification-notification: Hello")
      assert.equal(have.customPrettificationNotification, "Hello")
    })

    test(".prettification_notification", function () {
      const have = config.parseYML("prettification_notification: Hello")
      assert.equal(have.customPrettificationNotification, "Hello")
    })

    test(".prettificationNotification", function () {
      const have = config.parseYML("prettificationNotification: Hello")
      assert.equal(have.customPrettificationNotification, "Hello")
    })
  })

  test("invalid data", function () {
    assert.throws(function () {
      config.parseYML("'wrong")
    }, UserError)
  })
})
