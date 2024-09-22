mod analyser 'analyser/analyser.just'
mod dashboard 'dashboard/dashboard.just'
mod tests 'tests/tests.just'

# ------------------------------------------------------------------------------
# Docker
# ------------------------------------------------------------------------------

dashboard-docker-build:
    just dashboard::install dashboard::build
    cp -r dashboard/out docker/dashboard
    cd docker/dashboard && docker build -t github-stats-dashboard -f Dockerfile .

compose-up:
    docker compose -f=docker/docker-compose.yml up -d

compose-down:
    docker compose -f=docker/docker-compose.yml down

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
    just --fmt --unstable --justfile analyser/analyser.just
    just --fmt --unstable --justfile dashboard/dashboard.just
    just --fmt --unstable --justfile tests/tests.just

format-check:
    just --fmt --check --unstable
    just --fmt --check --unstable --justfile analyser/analyser.just
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
