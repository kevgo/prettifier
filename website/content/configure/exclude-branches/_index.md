---
title: Exclude Branches
weight: 40
---

To make Prettifier ignore certain branches, add an `excludeBranches` entry to
`.github/prettifier.yml` listing the branch names. Here is an example:

```yml
excludeBranches:
  - development
  - production
```

{{% notice tip %}} You might want to exclude
[protected branches](https://help.github.com/en/github/administering-a-repository/about-protected-branches)
since Prettifier cannot commit to them anyways. {{% /notice %}}
