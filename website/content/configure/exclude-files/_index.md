---
title: Exclude Files
weight: 50
---

The best way to not auto-format particular files, directories, or parts of files
is via Prettier's various [options](https://prettier.io/docs/en/ignore.html) for
this. This excludes files for both Prettifier and Prettier running locally on
your machine.

{{% notice info %}} Prettier ignores `node_modules` folders by default, no need
to specify them here. {{% /notice %}}

To exclude files only from Prettifier but not Prettier, add an `excludeFiles`
key with the glob expressions similar to
[.gitignore](https://git-scm.com/docs/gitignore) files to the
`.github/prettifier.yml` file. Here is an example:

```yml
excludeFiles:
  - confidential/
```
