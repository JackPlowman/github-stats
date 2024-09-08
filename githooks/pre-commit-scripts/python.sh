#!/bin/bash
set +x

just analyser::install

just analyser::ruff-format

just analyser::ruff-lint
