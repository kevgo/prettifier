---
title: Verification
weight: 70
---

To make sure any modification you make to the Prettifier configuration is
correct, make the change in a pull request. If Prettifier detects configuration
changes in a pull request, it adds a review comment confirming whether they are
valid. We call this **GitHubOps!**

{{< figure title="configuration change review by Prettifier"
           src="/configure/verify-configuration/images/verification.png"
           alt="screenshot">}}

Prettifier also offers bot commands to debug your setup. To try them out,
comment `/prettifier help` on an issue or pull request. Prettifier will add a
comment with a list of all available bot commands. The current commands are:

- `/prettifier user error` posts the error message Prettifier would print when
  the user provides a broken configuration
