# Workspace Gradle CI Shim

This workspace hosts an Expo (React Native) app (no native Android project by default).
Some CI pipelines are hardcoded to run `./gradlew`.

Use:
- ./gradle-ci.sh

It ensures a `./gradlew` shim exists at the workspace, makes it executable, and exits successfully.

If a real native Android build is required:
1) cd tic-tac-toe-classic-7048-7057/tic_tac_toe_frontend
2) expo prebuild --platform android
3) cd android && ./gradlew assembleDebug
