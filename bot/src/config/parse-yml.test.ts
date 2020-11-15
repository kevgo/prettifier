import { assert } from "chai"

import { UserError } from "../logging/user-error"
import * as config from "."

suite(".parseYML", function () {
  suite("excludeBranches", function () {
    test("empty", async function () {
      const have = await config.parseYML("")
      assert.deepEqual(have.excludeBranches, [])
    })

    test("defined in prettifier.yml", async function () {
      const data = await config.parseYML("excludeBranches: dist")
      assert.deepEqual(data.excludeBranches, ["dist"])
    })
  })

  suite("prettification notification", function () {
    test(".prettification-notification", async function () {
      const have = await config.parseYML("prettification-notification: Hello")
      assert.equal(have.prettificationNotification, "Hello")
    })

    test(".prettification_notification", async function () {
      const have = await config.parseYML("prettification_notification: Hello")
      assert.equal(have.prettificationNotification, "Hello")
    })

    test(".prettificationNotification", async function () {
      const have = await config.parseYML("prettificationNotification: Hello")
      assert.equal(have.prettificationNotification, "Hello")
    })
  })

  test("invalid data", async function () {
    try {
      await config.parseYML("'wrong")
    } catch (e) {
      assert.isTrue(e instanceof UserError)
      return
    }
    throw new Error("expected function to throw")
  })
})
