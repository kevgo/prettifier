# Prettifier <img src="https://raw.githubusercontent.com/kevgo/prettifier/master/website/static/images/logo_400.jpg" width="33" height="23">

[![CircleCI](https://circleci.com/gh/kevgo/prettifier.svg?style=shield)](https://circleci.com/gh/kevgo/prettifier)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/kevgo/prettifier.svg)](https://lgtm.com/projects/g/kevgo/prettifier/context:javascript)

_A GitHub bot that keeps your code base consistently formatted._

---

**UPDATE TO PRETTIER 2.0**

Prettier released version 2.0 with
[larger changes to the way it formats](https://prettier.io/blog/2020/03/21/2.0.0.html).
Prettifier runs Prettier for you and adopts these breaking changes. We encourage
you to do so as well.

As always, please adjust the
[Prettier configuration file](https://prettier.io/docs/en/options.html) in your
code base to fine-tune how Prettifier formats your changes.

---

Please see the [documentation](https://kevgo.github.io/prettifier) for how to
use Prettifier and the [change log](CHANGELOG.md) for product updates.

This is the source code of Prettifier. Organized as a monorepository, each
top-level directory contains some aspect of the product:

- [bot](bot/): source code for the GitHub bot
- [text-run](text-run/): documentation tests
- [website](website/): source code for the [website](https://www.prettifier.io)
