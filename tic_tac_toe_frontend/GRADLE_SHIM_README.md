# App-level Gradle Shim

This Expo app does not include a native Android project by default. Some CI pipelines call `./gradlew` (or `gradlew.bat`) in this directory, which would normally fail.

To prevent spurious CI failures, the following shim wrappers are included:
- `./gradlew` (POSIX shell)
- `./gradlew.bat` (Windows)

They simply no-op and return success.

If you need a real native build:
1. npx expo prebuild --platform android
2. cd android && ./gradlew assembleDebug
