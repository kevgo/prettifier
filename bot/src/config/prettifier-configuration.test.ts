import { assert } from "chai"
import { PrettifierConfiguration } from "./prettifier-configuration"
import { UserError } from "../logging/user-error"

suite("PrettifierConfiguration", function () {
  suite(".shouldIgnoreBranch()", function () {
    test("ignores excluded branches", function () {
      const config = new PrettifierConfiguration(
        {
          excludeBranches: ["master"],
        },
        ""
      )
      assert.isTrue(config.shouldIgnoreBranch("master"))
    })

    test("approves non-excluded branches", function () {
      const config = new PrettifierConfiguration(
        {
          excludeBranches: ["master"],
        },
        ""
      )
      assert.isFalse(config.shouldIgnoreBranch("foo"))
    })

    test("default behavior", function () {
      const config = new PrettifierConfiguration({}, "")
      assert.isFalse(config.shouldIgnoreBranch("foo"))
    })
  })

  suite(".shouldPrettify()", function () {
    test("ignores 'node_modules' by default", async function () {
      const config = new PrettifierConfiguration({}, "")
      assert.isFalse(await config.shouldPrettify("node_modules/foo/bar.js"))
    })

    test("excluded folder in prettifier.yml", async function () {
      const config = new PrettifierConfiguration({ excludeFiles: ["dist"] }, "")
      assert.isFalse(await config.shouldPrettify("dist/foo.js"))
    })

    test("excluded folder in prettier.yml", async function () {
      const config = new PrettifierConfiguration({}, "dist/")
      assert.isFalse(await config.shouldPrettify("dist/foo.js"))
    })

    test("non-excluded file", async function () {
      const config = new PrettifierConfiguration({}, "")
      assert.isTrue(await config.shouldPrettify("foo.js"))
    })
  })

  suite(".excludeBranches", function () {
    test("array given", async function () {
      const config = new PrettifierConfiguration({ excludeBranches: ["foo"] }, "")
      assert.deepEqual(config.excludeBranches, ["foo"])
    })

    test("single name given", async function () {
      const config = new PrettifierConfiguration({ excludeBranches: "foo" }, "")
      assert.deepEqual(config.excludeBranches, ["foo"])
    })

    test("nothing given", async function () {
      const config = new PrettifierConfiguration({}, "")
      assert.deepEqual(config.excludeBranches, ["node_modules"])
    })
  })

  suite(".excludeFiles()", function () {
    test("array given", async function () {
      const config = new PrettifierConfiguration({ excludeFiles: ["foo"] }, "")
      assert.deepEqual(config.excludeFiles, ["foo"])
    })

    test("single name given", async function () {
      const config = new PrettifierConfiguration({ excludeFiles: "foo" }, "")
      assert.deepEqual(config.excludeFiles, ["foo"])
    })

    test("nothing given", async function () {
      const config = new PrettifierConfiguration({}, "")
      assert.deepEqual(config.excludeFiles, ["package-lock.json"])
    })
  })

  suite(".fromYML", function () {
    test("empty", function () {
      const actual = PrettifierConfiguration.fromYML("", "")
      assert.isNotNull(actual)
      assert.instanceOf(actual, PrettifierConfiguration)
      assert.deepEqual(actual.excludeBranches, ["node_modules"])
    })

    test("excludeBranches in prettifier.yml", function () {
      const actual = PrettifierConfiguration.fromYML("excludeBranches: dist", "")
      assert.isNotNull(actual)
      assert.instanceOf(actual, PrettifierConfiguration)
      assert.deepEqual(actual.excludeBranches, ["dist"])
    })

    test(".prettierignore", async function () {
      const config = PrettifierConfiguration.fromYML("", "dist/")
      assert.isFalse(await config.shouldPrettify("dist/foo.md"))
    })

    test(".welcome()", async function () {
      const config = PrettifierConfiguration.fromYML("welcome: Hello", "")
      assert.equal(await config.welcome(), "Hello")
    })

    test("invalid", function () {
      assert.throws(function () {
        PrettifierConfiguration.fromYML("'wrong", "")
      }, UserError)
    })
  })
})
