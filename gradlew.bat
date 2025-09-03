@echo off
REM Workspace-level Gradle wrapper shim for CI environments that invoke gradlew.bat.
REM This Expo project does not include a native Android project by default.
REM If a native build is required, run `npx expo prebuild --platform android` inside tic_tac_toe_frontend.
echo [workspace gradlew.bat shim] No native Android project present. Skipping Gradle build.
echo [workspace gradlew.bat shim] To generate one, run: (cd tic_tac_toe_frontend && npx expo prebuild --platform android)
exit /b 0
