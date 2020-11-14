# Prettifier Bot

This is the source code for the Prettifier bot. The manual for end users is at
[prettifier.io](https://www.prettifier.io).

### Setup

Install these tools:

- [Node.js](https://nodejs.org) version 12 or later
- [Yarn](https://yarnpkg.com/en/docs/install)

Run <code type="make/command">make setup</code>.

### Development

Use [GitHub's API explorer](https://developer.github.com/v4/explorer) to play
with GitHub's GraphQL API.

Module `@octokit/graphql-schema` provides the the currently schema of GitHub's
GraphQL API. Run <code type="make/command">make generate</code> to update the
[TypeScript wrappers](src/github/graphql-generated.ts) for our GraphQL queries.

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

Debug tests in VSCode:

- start VSCode from within the `bot` directory
- open the test file to debug and set a breakpoint
- choose <code type="debug-target">Current TS Mocha File</code> from the Debug
  menu

### Deployment

1. create a new GitHub application
   ([detailed instructions](https://developer.github.com/apps/building-github-apps/creating-a-github-app))

2. build the code base:

   ```bash
   cd bot
   make build
   ```

3. set up a server with [NodeJS](https://nodejs.org) version 12 or higher

4. set these environment variables on your server:

   - `APP_ID` - the ID of your GitHub app
   - `PRIVATE_KEY` - the private key of your GitHub app
   - `WEBHOOK_SECRET` - the webhook secret set on GitHub

5. deploy the `/bot/dist` directory to this server and run `make start` on the
   server

6. set up auto-restarting, auto-scaling, logging, monitoring, etc

### DevOps

This codebase has support for running on Heroku built in.

- deploy the current branch: <code type="make/command">make deploy</code>
- see the server logs: <code type="make/command">make logs</code> (needs the
  [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli))
- this code base uses **GitHubOps**: production incidents get filed as GitHub
  tickets
