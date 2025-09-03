#!/bin/sh
# Workspace-level POSIX gradle wrapper shim for CI environments.
# Safe no-op for this Expo app (no native Android project by default).
echo "[workspace gradlew.posix.sh] Skipping native Gradle build (Expo app)."
exit 0
