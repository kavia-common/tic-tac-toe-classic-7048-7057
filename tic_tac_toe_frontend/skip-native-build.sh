#!/usr/bin/env sh
# Explicitly skip native Gradle builds for this Expo app in CI.
echo "[skip-native-build] This is an Expo (React Native) app without a native Android project."
echo "[skip-native-build] Skipping Gradle build steps. Use npm run lint / npm run web instead."
exit 0
