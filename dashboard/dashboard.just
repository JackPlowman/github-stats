# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install Node Dependencies
install:
    npm install

# Start the development server
dev:
    npm run dev

# Build an optimized production version of the app
build:
    npm run build && npm run postbuild

build-local:
    npm run build:local && npm run postbuild:local

# Lint typescript code with ESLint
lint:
    npm run lint

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
