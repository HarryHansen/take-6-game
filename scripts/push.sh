#!/bin/bash
npm test || exit 1          # Stops if tests fail
git add .
read -p "📝 Enter commit message: " msg
[ -z "$msg" ] && exit 1     # Prevents empty commits
git commit -m "$msg"
git push
