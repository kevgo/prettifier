---
title: Direct Commits
weight: 10
---

Every time somebody pushes a commit that isn't properly formatted, Prettifier
adds a commit that fixes the formatting into the same branch.

{{< figure title="a direct Prettifier commit formatting a previously made commit"
           src="/learn/direct-commits/images/commit_annotated.png"
           alt="screenshot">}}

{{% notice info %}} These commits are made to the remote branch on GitHub. Run
`git pull` to get them onto your developer machine. Use
[Git Town](http://www.git-town.com) to do this regularly during
development.{{% /notice %}}
