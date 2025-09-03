#!/usr/bin/env sh
set -e
echo "[ci-generate-native-android] Starting Expo prebuild for Android..."
echo "[ci-generate-native-android] Working directory: $(pwd)"
if ! command -v expo >/dev/null 2>&1; then
  echo "[ci-generate-native-android] ERROR: 'expo' CLI not found. Install Expo CLI or use npx:"
  echo "  npx expo prebuild --platform android"
  exit 1
fi

expo prebuild --platform android --clean
echo "[ci-generate-native-android] Prebuild completed. Android folder with Gradle wrapper should now exist."
echo "[ci-generate-native-android] Next steps (if CI requires running Gradle):"
echo "  cd android && ./gradlew assembleDebug"
