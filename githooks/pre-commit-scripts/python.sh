#!/bin/bash
set -e +x

just tests::install
just tests::ruff-fix
