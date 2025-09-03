# Gradle Wrapper Shims

This workspace includes shim files for CI systems that invoke `./gradlew` or `gradlew.bat` at the workspace root:

- `./gradlew` (POSIX shell)
- `./gradlew.bat` (Windows cmd)

They no-op because this is an Expo-managed project without a native Android project checked in by default.

If you truly need a native Android project:
1. cd tic_tac_toe_frontend
2. npx expo prebuild --platform android
3. cd android && ./gradlew assembleDebug

Otherwise, keep using Expo workflows (npm/yarn/pnpm with `expo start`, `expo run`, `expo export`, etc.).
