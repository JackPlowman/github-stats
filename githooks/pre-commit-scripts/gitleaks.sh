#!/bin/bash
set -e+x

gitleaks detect --source .

exit 2
