#!/usr/bin/env sh
# Workspace root-level shim to accommodate CI calling ./gradlew with /bin/sh.
echo "[workspace gradlew.sh shim] Skipping native Gradle build (Expo app)."
exit 0
