#!/bin/bash
set -e +x

just dashboard::install

just dashboard::lint
