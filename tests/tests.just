# ------------------------------------------------------------------------------
# Environment Variables
# ------------------------------------------------------------------------------

export DEFAULT_PROJECT_URL := "https://jackplowman.github.io/github-stats"

# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install All Python Dependencies
install:
    uv sync --all-extras

# Run End-to-End Tests
run $PROJECT_URL=DEFAULT_PROJECT_URL $browser="chromium":
    uv run pytest ui -vv --reruns 2 --browser ${browser}

# Run End-to-End Tests with dashboard running locally
run-local $project_url="TODO":
    just tests::run ${project_url}

# Run End-to-End Tests in a specific browser
run-ci $browser:
    just tests::run $DEFAULT_PROJECT_URL ${browser}

# Install playwright dependencies
playwright-install:
    uv run playwright install --with-deps

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
# Ruff - Python Linting and Formatting
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

# ------------------------------------------------------------------------------
# Ty - Python Type Checking
# ------------------------------------------------------------------------------

# Check for type issues with Ty
ty-check:
    uv run ty check .

# ------------------------------------------------------------------------------
# Other Python Tools
# ------------------------------------------------------------------------------

# Check uv lockfile
uv-lock-check:
    uv lock --check
