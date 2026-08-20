#!/bin/bash
set -e
DIR="$(dirname "$0")/../src/assets/figma"
mkdir -p "$DIR"

declare -A ASSETS=(
  [step1-active-photo.png]="https://www.figma.com/api/mcp/asset/32d49b56-7023-4fa7-a38f-b4e1928e118f.png"
  [step2-active-photo.png]="https://www.figma.com/api/mcp/asset/8f780610-60d6-4fd2-82ba-a422da32d1aa.png"
  [step3-active-photo.png]="https://www.figma.com/api/mcp/asset/3f6084a1-2c3b-4005-bc60-eb51de06685b.png"
  [step4-active-photo.png]="https://www.figma.com/api/mcp/asset/c73a64d8-47ee-455d-a5bd-843a835a92f7.png"
)

for name in "${!ASSETS[@]}"; do
  url="${ASSETS[$name]}"
  echo "Downloading $name"
  curl -sL -o "$DIR/$name" "$url"
done

echo "Done."
ls -la "$DIR" | grep step
