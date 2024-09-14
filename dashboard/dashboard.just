# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install Node Dependencies
install:
    npm install

dev:
    npx astro dev

build:
    npx next build

lint:
    npx next lint

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
