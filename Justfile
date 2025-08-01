mod dashboard 'dashboard/dashboard.just'
mod tests 'tests/tests.just'

# ------------------------------------------------------------------------------
# Prettier
# ------------------------------------------------------------------------------

# Check all files with prettier
prettier-check:
    prettier . --check

# Format all files with prettier
prettier-format:
    prettier . --check --write

# ------------------------------------------------------------------------------
# Justfile
# ------------------------------------------------------------------------------

# Format Justfile
format:
    just --fmt --unstable
    just --fmt --unstable --justfile dashboard/dashboard.just
    just --fmt --unstable --justfile tests/tests.just

# Check Justfile formatting
format-check:
    just --fmt --check --unstable
    just --fmt --check --unstable --justfile dashboard/dashboard.just
    just --fmt --check --unstable --justfile tests/tests.just

# ------------------------------------------------------------------------------
# Gitleaks
# ------------------------------------------------------------------------------

# Run gitleaks detection
gitleaks-detect:
    gitleaks detect --source .

# ------------------------------------------------------------------------------
# Lefthook
# ------------------------------------------------------------------------------

# Validate lefthook config
lefthook-validate:
    lefthook validate

# ------------------------------------------------------------------------------
# Zizmor
# ------------------------------------------------------------------------------

# Run zizmor checking
zizmor-check:
    uvx zizmor . --persona=auditor

# ------------------------------------------------------------------------------
# Actionlint
# ------------------------------------------------------------------------------

# Run actionlint checks
actionlint-check:
    actionlint

# ------------------------------------------------------------------------------
# Pinact
# ------------------------------------------------------------------------------

# Run pinact
pinact-run:
    pinact run

# Run pinact checking
pinact-check:
    pinact run --verify --check

# Run pinact update
pinact-update:
    pinact run --update

# ------------------------------------------------------------------------------
# EditorConfig
# ------------------------------------------------------------------------------

# Check files format with EditorConfig
editorconfig-check:
    editorconfig-checker

# ------------------------------------------------------------------------------
# Git Hooks
# ------------------------------------------------------------------------------

# Install pre commit hook to run on all commits
install-git-hooks:
    lefthook install -f
