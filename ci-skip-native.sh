#!/usr/bin/env sh
# CI helper for the workspace. Skips native Gradle build and provides guidance.
echo "[workspace CI] Skipping native Gradle build for Expo app. Use Node-based scripts."
echo "Suggested steps:"
echo "  cd tic-tac-toe-classic-7048-7057/tic_tac_toe_frontend"
echo "  npm ci"
echo "  npm run lint"
echo "  npm run web (optional)"
exit 0
