.DEFAULT_GOAL := build

build: clean  # builds the production version
	${CURDIR}/node_modules/.bin/tsc -p tsconfig.json --noEmit

clean:  # removes all build artifacts
	rm -rf dist

doc:  # runs the documentation tests
	${CURDIR}/node_modules/.bin/text-run

fix:  # fixes the auto-fixable formatting issues
	${CURDIR}/node_modules/.bin/prettier --write .
	${CURDIR}/node_modules/.bin/eslint . --ext .ts --fix

help:   # prints all make targets
	@cat Makefile | grep '^[^ ]*:' | grep -v '.PHONY' | grep -v help | sed 's/:.*#/#/' | column -s "#" -t

lint:  # lints the code base
	${CURDIR}/node_modules/.bin/eslint --ext .ts .
	${CURDIR}/node_modules/.bin/prettier --list-different .

setup:  # prepares this code base for development
	yarn

stats:  # shows code statistics
	find . -type f | grep -v '\./node_modules/' | grep -v '\./dist/' | xargs cloc

test:  # runs all tests
	${CURDIR}/node_modules/.bin/tsc -p . --noEmit &
	${CURDIR}/node_modules/.bin/text-run &
	${CURDIR}/node_modules/.bin/prettier --list-different --ignore-path=../.prettierignore . &
	${CURDIR}/node_modules/.bin/eslint . --ext .ts

update:  # updates the dependencies
	yarn upgrade --latest

.SILENT:
