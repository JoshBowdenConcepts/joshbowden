#!/usr/bin/env sh
set -e
root="$(cd "$(dirname "$0")/.." && pwd)"
exec "$root/node_modules/.bin/tsx" "$root/scripts/generate-og-image.ts"
