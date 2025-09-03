# Tic Tac Toe Frontend (Expo)

Features:
- 3x3 responsive board
- Player vs Player and Player vs Computer (basic AI)
- Status display (win/lose/draw)
- Restart button
- Modern, minimal, light theme

Run:
- npm install
- npm run web (or npm start)

Native build (optional):
- expo prebuild --platform android
- cd android && ./gradlew assembleDebug

CI:
- If your CI tries to run a native Gradle build, use the helper:
  ./skip-native-build.sh
