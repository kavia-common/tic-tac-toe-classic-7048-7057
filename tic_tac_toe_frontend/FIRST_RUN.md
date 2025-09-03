# First Run

This is an Expo (React Native) app. To run locally:

1) Install dependencies:
   npm install

2) Run on web (recommended for quick verification):
   npm run web

3) Or start the dev server:
   npm start

Gameplay:
- Default mode: Player vs Computer (you are X, computer is O)
- Switch to Player vs Player using the mode buttons
- Status shows current state (turn / win / draw)
- Use Restart to reset the board

Notes:
- This project does not include a native Android project by default.
- If you need a native build, run:
  expo prebuild --platform android
  cd android && ./gradlew assembleDebug
