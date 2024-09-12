# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install Node Dependencies
install:
    npm install

dev:
    npx astro dev

start:
    npx astro dev

build:
    npx astro check && npx astro build

preview:
    npx astro preview

# Run unit tests
unit-test:
    npx jest

# Run unit tests with coverage
unit-test-coverage:
    npx jest --coverage

# ------------------------------------------------------------------------------
# Prettier
# ------------------------------------------------------------------------------

prettier-check:
    npx prettier src --check

prettier-format:
    npx prettier src --check --write

# ------------------------------------------------------------------------------
# ESLint
# ------------------------------------------------------------------------------

eslint-check:
    npx eslint src

eslint-fix:
    npx eslint src --fix
