.DEFAULT_GOAL := build

build: clean  # builds all code bases
	(cd bot && make build)
	(cd website && make build)

clean:  # removes all build artifacts
	(cd bot && make clean)

doc:  # verifies the documentation
	(cd bot && make build)
	${CURDIR}/node_modules/.bin/text-run --format=dot --offline

fix:  # fixes the auto-fixable formatting issues
	${CURDIR}/node_modules/.bin/prettier --write .
	(cd bot && make fix)
	(cd website && make fix)

help:   # shows all available Make commands
	cat Makefile | grep '^[^ ]*:' | grep -v '.PHONY' | grep -v help | sed 's/:.*#/#/' | column -s "#" -t

lint:  # lints the code base
	${CURDIR}/node_modules/.bin/prettier --list-different .
	(cd bot && make lint)
	(cd website && make lint)

log:   # shows the log output from the production server
	heroku logs --tail --app prettifier-prod

stats:  # shows code statistics
	find . -type f | grep -v '/node_modules/' | grep -v '/dist/' | grep -v '\./.git/' | grep -v '\./website/website/' | xargs scc

test:  # runs all tests
	make lint
	(cd bot && make test)
	make doc

setup:  # prepares the code base for working after being cloned
	yarn
	(cd website && make setup)

update:  # updates dependencies to the latest version
	yarn upgrade-interactive --latest

.SILENT:
