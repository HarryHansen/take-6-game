#!/usr/bin/env bash
set -e

echo "🧪 Running tests (non-interactive mode)..."
CI=true npx vitest run --coverage=false || { echo "❌ Tests failed. Aborting."; exit 1; }

git add .

# POSIX-kompatibles Prompt (ersetzt das fehlerhafte read -p)
printf "📝 Enter commit message: "
read msg < /dev/tty  # Erzwingt Lesezugriff auf die echte Konsole

[ -z "$msg" ] && { echo "❌ No commit message. Aborting."; exit 1; }

git commit -m "$msg"
git push
