mod dashboard 'dashboard/dashboard.just'
mod tests 'tests/tests.just'

# ------------------------------------------------------------------------------
# Docker
# ------------------------------------------------------------------------------

dashboard-docker-build:
    cd docker/dashboard && docker build -t github-stats-dashboard -f Dockerfile .

end-to-end-tests-docker-build:
    cp tests/poetry.lock tests/pyproject.toml docker/end_to_end_tests
    cd docker/end_to_end_tests && docker build -t end-to-end-tests -f Dockerfile .

compose-up-local-test:
    docker compose -f=docker/docker-compose-local-test.yml up

compose-down-local-test:
    docker compose -f=docker/docker-compose-local-test.yml down

compose-up-prod-test:
    docker compose -f=docker/docker-compose-prod-test.yml up

compose-down-prod-test:
    docker compose -f=docker/docker-compose-prod-test.yml down

# ------------------------------------------------------------------------------
# Prettier
# ------------------------------------------------------------------------------

prettier-check:
    prettier . --check

prettier-format:
    prettier . --check --write

# ------------------------------------------------------------------------------
# Justfile
# ------------------------------------------------------------------------------

format:
    just --fmt --unstable
    just --fmt --unstable --justfile dashboard/dashboard.just
    just --fmt --unstable --justfile tests/tests.just

format-check:
    just --fmt --check --unstable
    just --fmt --check --unstable --justfile dashboard/dashboard.just
    just --fmt --check --unstable --justfile tests/tests.just

# ------------------------------------------------------------------------------
# Git Hooks
# ------------------------------------------------------------------------------

# Install pre commit hook to run on all commits
install-git-hooks:
    cp -f githooks/pre-commit .git/hooks/pre-commit
    cp -f githooks/post-commit .git/hooks/post-commit
    chmod ug+x .git/hooks/*
