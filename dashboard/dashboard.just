# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install Node Dependencies
install:
    npm install

# Start the development server
dev:
    export NEXT_PUBLIC_SITE_URL=http://localhost:3000/github-stats
    npm run dev

# Build an optimized production version of the app
build:
    npm run build && npm run postbuild

build-local:
    npm run build && npm run postbuild:local

# Lint typescript code with ESLint
lint:
    npm run lint

# Lint typescript code with ESLint and generate a SARIF file
eslint-with-sarif:
    npx eslint . --format @microsoft/eslint-formatter-sarif --output-file eslint-results.sarif

# Run unit tests
unit-test:
    npm run test

# Run unit tests with coverage
unit-test-coverage:
    npm run test:coverage

# ------------------------------------------------------------------------------
# Prettier
# ------------------------------------------------------------------------------

# Check if code is formatted correctly
prettier-check:
    npx prettier . --check

# Format code with Prettier
prettier-format:
    npx prettier . --check --write
