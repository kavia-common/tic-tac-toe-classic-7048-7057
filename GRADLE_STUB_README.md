These are workspace-level Gradle wrapper stubs intended to satisfy CI that invokes './gradlew' from the workspace root.

They intentionally no-op. For a real native Android build:
1) cd tic-tac-toe-classic-7048-7057/tic_tac_toe_frontend
2) expo prebuild --platform android
3) cd android && ./gradlew assembleDebug
