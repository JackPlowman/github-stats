#!/bin/bash
set -e +x

just analyser::install

just analyser::ruff-format

just analyser::ruff-lint
