.DEFAULT_GOAL := help

build:  # compiles the static HTML files
	@hugo

clear:  # removes the build artifacts
	@rm -rf public

help:   # shows all available Make commands
	@cat Makefile | grep '^[^ ]*:' | grep -v '.PHONY' | grep -v help | sed 's/:.*#/#/' | column -s "#" -t

setup:
	@echo "Please install Hugo if you haven't yet: https://gohugo.io/getting-started/installing"

start:  # runs the local development server
	@hugo serve -p 3000
