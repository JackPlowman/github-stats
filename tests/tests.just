# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install Python Dependencies
install:
    poetry install

# Run End-to-End Tests
run:
    poetry run pytest end_to_end --gherkin-terminal-reporter -vv

# Run End-to-End Tests with dashboard running locally
run-local:
    PROJECT_URL=http://localhost:3000/github-stats poetry run pytest end_to_end --gherkin-terminal-reporter -vvvv

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

# ------------------------------------------------------------------------------
# Ruff - Python Linting and Formating
# Set up ruff red-knot when it's ready
# ------------------------------------------------------------------------------

# Fix all Ruff issues
ruff-fix:
    just tests::ruff-lint-fix
    just tests::ruff-format-fix

# Check for Ruff issues
ruff-lint:
    poetry run ruff check end_to_end

# Fix Ruff lint issues
ruff-lint-fix:
    poetry run ruff check end_to_end --fix

# Check for Ruff format issues
ruff-format:
    poetry run ruff format --check end_to_end

# Fix Ruff format issues
ruff-format-fix:
    poetry run ruff format end_to_end
