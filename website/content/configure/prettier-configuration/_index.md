---
title: Prettier configuration
weight: 10
---

Prettifier uses all of
[Prettier's configuration options](https://prettier.io/docs/en/options.html) for
formatting.

For security reasons, Prettifier loads only
[Prettier configuration files](https://prettier.io/docs/en/configuration.html)
in data formats:

- `.prettierrc`
- `.prettierrc.json`
- `.prettierrc.json5`
- `.prettierrc.toml`
- `.prettierrc.yml`
- `.prettierrc.yaml`

This means Prettifier does not use programmatic configuration files like

- `.prettierrc.js`
- `.prettierrc.cjs`
- `prettier.config.js`
- `prettier.config.cjs`

{{% notice info %}} Making configuration files turing-complete is a security
anti-pattern. A Prettier configuration file written in JavaScript can load code
from the internet and run it with full access to your hard drive and network.
This is not something people expect when running a tool like Prettier.
{{% /notice %}}
