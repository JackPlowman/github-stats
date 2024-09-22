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

run-local:
    PROJECT_URL=http://localhost:3000/github-stats poetry run pytest end_to_end --gherkin-terminal-reporter -vvvv

validate-schema:
    poetry run check-jsonschema --schemafile schema_validation/repository_statistics_schema.json schema_validation/repository_statistics.json

# ------------------------------------------------------------------------------
# Ruff - # Set up red-knot when it's ready
# ------------------------------------------------------------------------------

ruff-fix:
    just tests::ruff-lint-fix
    just tests::ruff-format-fix

ruff-lint:
    poetry run ruff check end_to_end

ruff-lint-fix:
    poetry run ruff check end_to_end --fix

ruff-format:
    poetry run ruff format --check end_to_end

ruff-format-fix:
    poetry run ruff format end_to_end
