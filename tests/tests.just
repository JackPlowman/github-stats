# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install All Python Dependencies
install:
    poetry install -E dev

# Install Only Root Dependencies
install-only-root:
    poetry install --only-root

# Run End-to-End Tests
run:
    PROJECT_URL=https://jackplowman.github.io/github-stats \
    poetry run pytest end_to_end --gherkin-terminal-reporter -vv

# Run End-to-End Tests with dashboard running locally
run-local:
    PROJECT_URL=http://localhost:8000 \
    ENVIRONMENT=local \
    poetry run pytest end_to_end --gherkin-terminal-reporter -vvvv

# Remove all compiled Python files
clean:
    find . \( \
      -name '__pycache__' -o \
      -name '.coverage' -o \
      -name '.mypy_cache' -o \
      -name '.pytest_cache' -o \
      -name '.ruff_cache' -o \
      -name '*.pyc' -o \
      -name '*.pyd' -o \
      -name '*.pyo' -o \
      -name 'coverage.xml' -o \
      -name 'db.sqlite3' \
    \) -print | xargs rm -rfv

# Validates Pyproject
pyproject-check:
    poetry check

# ------------------------------------------------------------------------------
# Ruff - Python Linting and Formating
# Set up ruff red-knot when it's ready
# ------------------------------------------------------------------------------

# Fix all Ruff issues
ruff-fix:
    just tests::ruff-format-fix
    just tests::ruff-lint-fix

# Check for Ruff issues
ruff-lint-check:
    poetry run ruff check end_to_end

# Fix Ruff lint issues
ruff-lint-fix:
    poetry run ruff check end_to_end --fix --unsafe-fixes

# Check for Ruff format issues
ruff-format-check:
    poetry run ruff format --check end_to_end

# Fix Ruff format issues
ruff-format-fix:
    poetry run ruff format end_to_end
