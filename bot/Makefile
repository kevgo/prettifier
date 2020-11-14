.DEFAULT_GOAL := build

build:  # builds the production version
	${CURDIR}/node_modules/.bin/tsc -p tsconfig-build.json

clean:  # removes all build artifacts
	rm -rf dist

deploy:  # deploys the current branch to Heroku
	(cd .. && git push heroku $(shell cd .. && git subtree split --prefix bot $(shell git branch --show-current)):master --force)

fix:  # fixes the auto-fixable formatting issues
	${CURDIR}/../tools/node_modules/.bin/concurrently --raw \
		"${CURDIR}/node_modules/.bin/prettier --write ." \
		"${CURDIR}/node_modules/.bin/eslint . --ext .ts --fix"

generate:  # generates the GraphQL TS types
	${CURDIR}/node_modules/.bin/graphql-codegen --config codegen.yml

help:   # prints all make targets
	@cat Makefile | grep '^[^ ]*:' | grep -v '.PHONY' | grep -v help | sed 's/:.*#/#/' | column -s "#" -t

lint:  # lints the code base
	${CURDIR}/../tools/node_modules/.bin/concurrently --names=gqlins,eslint,prettier --prefix-colors=blue,green,yellow \
		"${CURDIR}/node_modules/.bin/graphql-inspector validate 'src/github/*.ts' node_modules/@octokit/graphql-schema/schema.graphql" \
		"${CURDIR}/node_modules/.bin/eslint --ext .ts ." \
		"${CURDIR}/node_modules/.bin/prettier --list-different ."

logs:   # shows the log output from the production server
	heroku logs --tail --app prettifier-prod

setup:  # prepares this code base for development
	yarn

ssh:  # opens a remote shell into the server
	heroku run bash --app prettifier-prod

start:   # starts the server
	yarn start

stats:  # shows code statistics
	find . -type f | grep -v '\./node_modules/' | grep -v '\./dist/' | xargs cloc

test:  # runs all tests
	${CURDIR}/../tools/node_modules/.bin/concurrently --names=gqlins,tsc,prettier,mocha,eslint --prefix-colors=blue,green,yellow,magenta,cyan --raw \
		"${CURDIR}/node_modules/.bin/graphql-inspector validate 'src/github/*.ts' node_modules/@octokit/graphql-schema/schema.graphql" \
		"${CURDIR}/node_modules/.bin/tsc -p tsconfig-build.json" \
		"${CURDIR}/node_modules/.bin/prettier --list-different --ignore-path=../.prettierignore ." \
		"${CURDIR}/node_modules/.bin/mocha --reporter dot 'src/**/*.test.ts'" \
		"${CURDIR}/node_modules/.bin/eslint . --ext .ts"

unit:  # runs the unit tests
	${CURDIR}/node_modules/.bin/mocha --reporter dot './src/**/*.test.ts'

update:  # updates the dependencies
	yarn upgrade --latest

.SILENT:
