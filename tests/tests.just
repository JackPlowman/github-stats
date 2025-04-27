# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install All Python Dependencies
install:
    uv sync --all-extras

# Run End-to-End Tests
run:
    PROJECT_URL=https://jackplowman.github.io/github-stats \
    uv run pytest ui -vv --reruns 2

# Run End-to-End Tests with dashboard running locally
run-local:
    PROJECT_URL=http://localhost:8000 \
    ENVIRONMENT=local \
    uv run pytest ui -vvvv --reruns 2

# Install playwright dependencies
playwright-install:
    uv run playwright install

# Install playwright minimum dependencies
playwright-install-minimum:
    uv run playwright install --with-deps --only-shell chromium

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

# Validate uv locked
uv-lock-check:
    uv lock --check

# ------------------------------------------------------------------------------
# Ruff - Python Linting and Formatting
# Set up ruff red-knot when it's ready
# ------------------------------------------------------------------------------

# Fix all Ruff issues
ruff-fix:
    just tests::ruff-format-fix
    just tests::ruff-lint-fix

# Check for all Ruff issues
ruff-checks:
    just tests::ruff-format-check
    just tests::ruff-lint-check

# Check for Ruff issues
ruff-lint-check:
    uv run ruff check ui

# Fix Ruff lint issues
ruff-lint-fix:
    uv run ruff check ui --fix --unsafe-fixes

# Check for Ruff format issues
ruff-format-check:
    uv run ruff format --check ui

# Fix Ruff format issues
ruff-format-fix:
    uv run ruff format ui
