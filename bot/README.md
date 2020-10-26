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

### Testing

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

The [DevOps](#devops) section describes how to access the server logs to debug
production issues. This bot also understands bot commands that help debug error
reporting:

- comment `/prettifier user error` inside a pull request or issue to see how a
  user error would look like
- comment `/prettifier dev error` inside an issue to see how Prettifier would
  report a bug
- comment `/prettifier help` to see a list of all available bot commands

### Deployment

The current codebase has built-in support for running on Heroku. To deploy the
current branch to production, run <code type="make/command">make deploy</code>
inside this directory.

### DevOps

- see the server logs: <code type="make/command">make logs</code> (needs the
  [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli))
- this code base uses GitHubOps: production incidents get filed as GitHub
  tickets at https://github.com/kevgo/prettifier/issues
