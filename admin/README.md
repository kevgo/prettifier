# Prettifier-Bot Admin Tool

This tool helps administrate the Prettifier GitHub application.

### setup

- copy file <b type="repo/existing-file">config.example.json</b> to
  **config.json** and fill in the values for the Prettifier GitHub application.
- if you don't have a private key for the Prettifier GitHub app,
  [generate a new one](https://docs.github.com/en/free-pro-team@latest/developers/apps/authenticating-with-github-apps#generating-a-private-key)
- save the private key file as **private-key.pem**

### features

Run `ts-node <command.ts>` to execute commands. The following commands are
available:

- <b type="repo/existing-file">installations.ts</b>: prints all Prettifier
  installations
