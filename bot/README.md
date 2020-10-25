# Prettifier Bot

This is the source code for the Prettifier bot.

### Setup

Install these tools:

- [Node.js](https://nodejs.org) version 12 or later
- [Yarn](https://yarnpkg.com/en/docs/install)

Run <code type="make/command">make setup</code>.

### Development

Use [GitHub's API explorer](https://developer.github.com/v4/explorer) to play
with GitHub's GraphQL API.

### Local testing

- compile the code: <code type="make/command">make build</code> or `make`
- run all tests: <code type="make/command">make test</code>
- run the unit tests: <code type="make/command">make unit</code>
- run the linters: <code type="make/command">make lint</code>
- fix the auto-fixable issues: <code type="make/command">make fix</code>

Validate the GraphQL schemata:

```bash
graphql-inspector \
    --header "Authorization: bearer <your GitHub API token>" \
    validate './src/github/*.graphql' https://api.github.com/graphql
```

### Deployment

The current codebase has built-in support for running on Heroku. To deploy the
current branch to production, run <code type="make/command">make deploy</code>
inside this directory.

### DevOps

- this code base uses GitHubOps: production incidents get filed as GitHub
  tickets at https://github.com/kevgo/prettifier/issues
- see the server logs: <code type="make/command">make logs</code>
