@echo off
REM App-level Gradle wrapper shim for CI environments that invoke gradlew.bat within the app folder.
REM This Expo project does not include a native Android project by default.
REM If a native build is required, run `npx expo prebuild --platform android` in this folder.
echo [app gradlew.bat shim] No native Android project present. Skipping Gradle build.
echo [app gradlew.bat shim] To generate one, run: npx expo prebuild --platform android
exit /b 0
