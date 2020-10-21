#! /usr/bin/env bash
set -euxo pipefail
# Install project dependencies excluded from VCS

VER="`sed -n 's/.*opencv-\([^j]*\)\.js.*/\1/p' manifest.json | sort -u`"
[[ "$VER" = master ]] &&
OUT=opencv.js         ||
OUT=opencv-$VER.js

[[ -e "$OUT" ]] ||
curl -o $OUT https://docs.opencv.org/$VER/opencv.js

