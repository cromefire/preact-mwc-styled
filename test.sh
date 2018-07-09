#!/usr/bin/env bash

echo "Linting TypeScript"
tslint -p tsconfig.json -e \"node_modules/**/*\"
status=$?

if [ ${status} -ne 0 ]; then
    exit 1;
fi
