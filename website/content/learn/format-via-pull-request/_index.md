---
title: Format via Pull Request
weight: 20
---

If Prettifier cannot [commit](
{{%relref "learn/format-via-commit/_index.md" %}}) the formatting changes
directly into the affected branch, for example because of
[branch protection](https://help.github.com/en/github/administering-a-repository/about-protected-branches),
it creates a pull request with the formatting fixes.

{{< figure title="a pull request made by Prettifier"
           src="/learn/format-via-pull-requests/images/screenshot_pull_request.png"
           alt="screenshot">}}

{{% notice note %}} You have to approve and merge this pull request yourself.
Prettifier doesn't try to click its way around branch protections.
{{% /notice %}}
