---
title: Prettification Notification
weight: 30
---

[Prettification Notifications](/learn/prettification-notification) are disabled
by default. To enable them, add a `prettificationNotification` entry with the
[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
text of the comment to your `.github/prettifier.yml` file. Here is an example:

```yml
prettification-notification: >
  Thanks for your contribution and welcome to this project! We format our source
  code using [Prettier](https://prettier.io). I have adjusted the formatting of
  this pull request for you.

  To stop seeing this message, please install Prettier on your machine and run
  `make format` to format your changes before submitting them.
```

{{% notice tip %}} Add this setting via a pull request that also contains some
unformatted changes to see how the message would look like {{% /notice %}}
