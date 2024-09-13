# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

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

install:
    poetry install

run:
    poetry run pytest end_to_end --gherkin-terminal-reporter -vv

# ------------------------------------------------------------------------------
# Ruff - # Set up red-knot when it's ready
# ------------------------------------------------------------------------------

ruff-fix:
    just analyser::ruff-lint-fix
    just analyser::ruff-format-fix

ruff-lint:
    poetry run ruff check application

ruff-lint-fix:
    poetry run ruff check application --fix

ruff-format:
    poetry run ruff format --check application

ruff-format-fix:
    poetry run ruff format application
