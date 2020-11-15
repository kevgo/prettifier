const config = require("../bot/dist/config")
const yaml = require("js-yaml")
const diff = require("assert-no-diff")

module.exports = async function (activity) {
  const documented = activity.nodes.text().trim()
  const expected = yaml
    .safeDump(config.defaults(), {
      sortKeys: true,
    })
    .trim()
  diff.trimmedLines(documented, expected)
}
