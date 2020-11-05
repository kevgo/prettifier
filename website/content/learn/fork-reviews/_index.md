---
title: Fork Reviews
weight: 40
---

Your Prettifier installation has authorization to access only the repositories
inside your GitHub organization. Pull requests from forks contain changes made
in repositories owned and managed by people outside your organization. Your
Prettifier installation cannot (and should not) commit into these repositories
directly. Prettifier checks the formatting of these changes once they are
proposed to your organization via a pull request. If it finds mismatching
formatting, Prettifier notifies the contributor about your project's formatting
guidelines and a list of files that have invalid formatting. You can customize
this message via the [configuration
file]({{%relref "configure/fork-review/_index.md" %}})

![screenshot](images/screenshot.gif)

{{% notice note %}} Prettifier adds only one such message per pull request, even
if later commits contain more formatting mismatches. {{% /notice %}}
