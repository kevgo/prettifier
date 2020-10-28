---
title: Welcome Comments
weight: 40
---

If you deal with a lot of contributions from strangers, for example as a
maintainer of a popular open-source project, you can find yourself explaining
the formatting guidelines in a lot of pull requests. Prettifier can do this for
you. To not be annoying to regular contributors, it does so only on pull
requests made from forks of your codebase.

![screenshot](images/welcome-message.gif)

Welcome Comments are disabled by default. You can enable them via the
[configuration file]({{%relref "configure/welcome-comment/_index.md" %}})

{{% notice note %}} Prettifier adds one only welcome comment per pull request,
even if it fixes subsequent commits. {{% /notice %}}
