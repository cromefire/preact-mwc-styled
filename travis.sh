#!/usr/bin/env bash
echo "Building project..."
yarn build
if [ ${?} -ne 0 ]; then
    exit ${?};
fi

echo "Linting TypeScript..."
yarn lint
if [ ${?} -ne 0 ]; then
    exit ${?};
fi
