mod analyser 'analyser/analyser.just'
mod dashboard 'dashboard/dashboard.just'

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

format-check:
    just --fmt --check --unstable
    just --fmt --check --unstable --justfile analyser/analyser.just
    just --fmt --check --unstable --justfile dashboard/dashboard.just

# ------------------------------------------------------------------------------
# Git Hooks
# ------------------------------------------------------------------------------

# Install pre commit hook to run on all commits
install-pre-commit:
    cp -f githooks/pre-commit .git/hooks/pre-commit
    chmod ug+x .git/hooks/*
