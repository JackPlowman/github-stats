#!/bin/bash
set +x
set -e

gitleaks detect --source .

exit 1
