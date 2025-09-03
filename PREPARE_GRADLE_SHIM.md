# Prepare Gradle Shim (Workspace)

If your CI invokes `./gradlew` from the workspace root, prepare the shim first from the repository root:

1) cd <repo-root>
2) ./create-gradlew-shim.sh

This creates an executable `./gradlew` that safely no-ops for this Expo app.

Native build (optional):
- In the app directory:
  - npx expo prebuild --platform android
  - cd android && ./gradlew assembleDebug
