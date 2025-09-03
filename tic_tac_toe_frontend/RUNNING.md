# Running the Tic Tac Toe Frontend (Expo)

Web/Expo Go:
1) npm install
2) npm run web (or npm start)

Lint:
- npm run lint

Native Android (local/dev):
1) expo prebuild --platform android
2) cd android
3) ./gradlew assembleDebug

Notes:
- This project is an Expo app; native 'android' is not present until you run the prebuild command.
- If your CI attempts './gradlew' without prebuild, it will fail. Either prebuild first or avoid native builds in CI.
