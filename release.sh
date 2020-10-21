#! /usr/bin/env bash
set -euxo pipefail

KEY=jwt.key
A="`head -n 1 $KEY`"
B="`tail -n 1 $KEY`"
web-ext sign --api-key=$A --api-secret=$B

