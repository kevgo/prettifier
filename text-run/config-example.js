const { PrettifierConfiguration } = require("../bot/dist/config/prettifier-configuration.js")
const yaml = require("js-yaml")
const diff = require("assert-no-diff")

module.exports = async function (activity) {
  const documented = activity.nodes.text().trim()
  const expected = yaml
    .safeDump(PrettifierConfiguration.defaults, {
      sortKeys: true,
    })
    .trim()
  diff.trimmedLines(documented, expected)
}
