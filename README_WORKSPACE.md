# Tic Tac Toe Classic - Workspace

This workspace contains the Expo (React Native) frontend app under:
- tic_tac_toe_frontend/

Recommended CI (no native Gradle build required):
1) cd tic-tac-toe-classic-7048-7057/tic_tac_toe_frontend
2) npm ci
3) npm run lint
4) npm run web (optional)

If your CI is hardcoded to call ./gradlew, generate a native Android project first:
1) cd tic-tac-toe-classic-7048-7057/tic_tac_toe_frontend
2) expo prebuild --platform android
3) cd android && ./gradlew assembleDebug
