import { assert } from "chai"
import { applyPrettierConfigOverrides } from "./apply-prettier-config-overrides"

suite("applyPrettierConfigOverrides", function () {
  test("no override", function () {
    const config = {
      printWidth: 120,
      proseWrap: "always",
      semi: false,
    }
    const overridden = applyPrettierConfigOverrides(config, "README.md")
    assert.deepEqual(overridden, {
      printWidth: 120,
      proseWrap: "always",
      semi: false,
    })
  })

  test("with override", function () {
    const config = {
      overrides: [
        {
          files: "**/*.md",
          options: { printWidth: 80 },
        },
      ],
      printWidth: 120,
      proseWrap: "always",
      semi: false,
    }
    let overridden = applyPrettierConfigOverrides(config, "README.md")
    assert.deepEqual(
      {
        printWidth: 80,
        proseWrap: "always",
        semi: false,
      },
      overridden
    )
    overridden = applyPrettierConfigOverrides(config, "bot/README.md")
    assert.deepEqual(
      {
        printWidth: 80,
        proseWrap: "always",
        semi: false,
      },
      overridden
    )
  })
})
