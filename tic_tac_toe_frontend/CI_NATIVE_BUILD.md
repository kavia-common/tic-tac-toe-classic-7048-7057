# CI Native Build (Optional)

This Expo app does not include a native Android project by default.

If your CI pipeline is hardcoded to run './gradlew', generate a native project first:
1) cd tic-tac-toe-classic-7048-7057/tic_tac_toe_frontend
2) ./ci-generate-native-android.sh
   - If 'expo' CLI is not installed in CI, you can use:
     npx expo prebuild --platform android
3) cd android && ./gradlew assembleDebug

Recommended CI (no native build):
- npm ci
- npm run lint
- npm run web (optional)
