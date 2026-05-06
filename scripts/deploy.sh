#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."

STAGING=false
SGP1="root@45.77.37.1"

for arg in "$@"; do
  case $arg in
    --staging) STAGING=true ;;
  esac
done

if [ "$STAGING" = true ]; then
  echo "→ Deploying xessone-status to STAGING"
  rsync -az --delete \
    --exclude=node_modules --exclude=.next --exclude=.git \
    --exclude=bun.lock --exclude='.env*' \
    ./ "$SGP1:/opt/staging/xessone/status/"
  ssh "$SGP1" "cd /opt/staging/xessone/status && bun install && bun run build && systemctl restart xessone-status-staging && systemctl is-active xessone-status-staging"
  echo "✓ staging: https://staging.status.xessone.com"
else
  echo "→ Deploying xessone-status to PRODUCTION"
  ssh "$SGP1" "cd /opt/xessone/status && git pull && bun install && bun run build && systemctl restart xessone-status && systemctl is-active xessone-status"
  echo "✓ production: https://status.xessone.com"
fi
