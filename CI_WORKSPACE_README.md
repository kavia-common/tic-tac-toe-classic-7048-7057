# Workspace CI Instructions

This workspace contains an Expo (React Native) app and does not require a native Gradle build in CI.

Use the helper script to bypass native builds:
- ./ci-skip-native.sh

Recommended steps for CI:
1) cd tic-tac-toe-classic-7048-7057/tic_tac_toe_frontend
2) npm ci
3) npm run lint
4) npm run web (optional)

If a real native Android build is required:
1) cd tic-tac-toe-classic-7048-7057/tic_tac_toe_frontend
2) expo prebuild --platform android
3) cd android && ./gradlew assembleDebug
