#!/bin/bash
set -e +x

just analyser::install

just analyser::ruff-format-fix

just analyser::ruff-lint-fix
