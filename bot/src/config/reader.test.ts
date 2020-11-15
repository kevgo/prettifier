import { assert } from "chai"

import * as config from "."

suite("config.Reader", function () {
  suite(".shouldIgnoreBranch()", function () {
    test("excluded branch", function () {
      const configReader = new config.Reader(
        {
          ...config.defaultValues(),
          excludeBranches: ["master"],
        },
        ""
      )
      assert.isTrue(configReader.shouldIgnoreBranch("master"))
    })

    test("approves non-excluded branches", function () {
      const configReader = new config.Reader(
        {
          ...config.defaultValues(),
          excludeBranches: ["master"],
        },
        ""
      )
      assert.isFalse(configReader.shouldIgnoreBranch("foo"))
    })

    test("default behavior", function () {
      const configReader = new config.Reader(config.defaultValues(), "")
      assert.isFalse(configReader.shouldIgnoreBranch("foo"))
    })
  })

  suite(".shouldPrettify()", function () {
    test("ignores 'node_modules' by default", async function () {
      const configReader = new config.Reader(config.defaultValues(), "")
      assert.isFalse(await configReader.shouldPrettify("node_modules/foo/bar.js"))
    })

    test("excluded folder in prettifier.yml", async function () {
      const configReader = new config.Reader({ ...config.defaultValues(), excludeFiles: ["dist"] }, "")
      assert.isFalse(await configReader.shouldPrettify("dist/foo.js"))
    })

    test("excluded folder in prettier.yml", async function () {
      const configReader = new config.Reader(config.defaultValues(), "dist/")
      assert.isFalse(await configReader.shouldPrettify("dist/foo.js"))
    })

    test("non-excluded file", async function () {
      const configReader = new config.Reader(config.defaultValues(), "")
      assert.isTrue(await configReader.shouldPrettify("foo.js"))
    })
  })
})
