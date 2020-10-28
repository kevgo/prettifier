---
title: Welcome Comments
weight: 30
---

[Welcome Comments](/learn/welcome-comments) are disabled by default. To enable
them, add a `welcome` entry with the
[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
text of the comment your `.github/prettifier.yml` file. Here is an example:

```yml
welcome: >
  Thanks for your contribution and welcome to this project! We format our source
  code using [Prettier](https://prettier.io). I have adjusted the formatting of
  this pull request for you.

  To stop seeing this message, please install Prettier on your machine and run
  `make format` to format your changes before submitting them.
```

{{% notice tip %}} Add this setting via a pull request that has same unformatted
changes to fine-tune how it looks like {{% /notice %}}
