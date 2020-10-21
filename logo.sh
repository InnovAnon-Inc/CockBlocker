#! /usr/bin/env bash
set -euxo pipefail
# Generate project logo

BOT=Twemoji_1f346.svg.png
TOP=No_circle.svg.png

for k in 24 32 48 96 192 ; do
  [[ ! -e icons/no-eggplant-${k}x${k}.png ]] || continue
  convert   -quality 100 -gravity center -resize ${k}x${k} -extent ${k}x${k} -transparent white $BOT  eggplant-${k}x${k}.png
  convert   -quality 100 -gravity center -resize ${k}x${k} -extent ${k}x${k} -transparent white $TOP no-circle-${k}x${k}.png 
  composite -quality 100 -gravity center no-circle-${k}x${k}.png eggplant-${k}x${k}.png      icons/no-eggplant-${k}x${k}.png
  #xdg-open no-eggplant-${k}x${k}.png
  rm eggplant-${k}x${k}.png no-circle-${k}x${k}.png
done

