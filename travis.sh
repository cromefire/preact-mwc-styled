#!/usr/bin/env bash
echo "Linting typescript..."
tslint -p tsconfig.json -e "node_modules/**/*"
