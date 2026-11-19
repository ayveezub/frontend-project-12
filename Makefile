# This is a starter template for the chat learning project: the student copies
# it and continues working on it. That is why dependencies are installed with
# npm, which the project itself uses. pnpm is not used here on purpose, so the
# student does not get a package manager the project steps never mention.
#
# The allowScripts field in package.json disables the install scripts of
# @swc/core and fsevents. Native bindings ship inside the packages; the build
# and tests do not need those scripts.

install:
	npm ci

build:
	rm -rf dist
	npm run build

start:
	make start-backend

start-backend:
	npx start-server -s ./dist

start-frontend:
	npm run dev

develop:
	make start-backend & make start-frontend

# The smoke test checks the entry point contract: the project check calls
# init with its socket and renders whatever init returns.
test:
	npm run --silent test

lint:
	npm run --silent lint
	npm run --silent format:check

lint-fix:
	npm run --silent lint:fix
