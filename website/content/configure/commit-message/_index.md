---
title: Commit Message
weight: 20
---

To customize the commit message that Prettifier uses to submit comments, add
this line to `.github/prettifier.yml`:

```yml
commitMessage: "Format {{commitSha}}"
```

The template supports the following placeholders:

- **commitSha:** inserts the SHA of the commit that is being formatted

{{% notice note %}} Please
[contact us](https://github.com/kevgo/prettifier/issues/new) if you need
additional placeholders. {{% /notice %}}
