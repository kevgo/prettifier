const diff = require("assert-no-diff")
const config = require("../bot/dist/config")

module.exports = async function (activity) {
  const documentedOptions = activity.nodes
    .textInNodesOfType("strong")
    .map(s => s.substr(0, s.length - 1))
    .sort()
    .join("\n")
  const actualOptions = Object.keys(config.defaults()).sort().join("\n")
  diff.trimmedLines(documentedOptions, actualOptions)
}
