#!/bin/bash
set -e +x

# Check if there are any changes in the watched folder
if git diff --cached --name-only | grep -q "^dashboard/"; then
  just dashboard::install
  just dashboard::lint
fi
