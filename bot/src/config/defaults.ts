import * as config from "."

/** provides the default values, with the given overrides applied */
export function defaultValues(): config.Data {
  return {
    commentTemplate: `\
Hey there! :wave: This repository uses the [Prettier](https://prettier.io) code style.

You forgot to format these files in your pull request:

{{#files}}
- {{.}}
{{/files}}

The [Prettier installation guide](https://prettier.io/docs/en/install.html) is a good place to get started with formatting your code properly.
Thanks!

:heart:

Your friendly [Prettifier bot](https://www.prettifier.io).`,
    commitMessage: "Format {{commitSha}}",
    prettificationNotification: "",
    excludeBranches: [],
    excludeFiles: [],
    pullsOnly: false,
  }
}
