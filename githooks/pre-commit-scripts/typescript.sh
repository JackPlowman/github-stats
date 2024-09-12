#!/bin/bash
set -e +x

just dashboard::install

just dashboard::eslint-fix

just dashboard::prettier-format
