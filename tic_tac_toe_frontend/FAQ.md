# FAQ

Q: How do I switch between Player vs Computer and Player vs Player?
A: Use the mode buttons under the header. The board resets on mode switch.

Q: Who plays first in PvC?
A: You (X) play first. The computer is O.

Q: How do I restart?
A: Tap the Restart button under the status text.

Q: Why does the game reset after a win/draw?
A: The app auto-resets after a short delay to keep gameplay flowing. You can disable this by removing the post-game effect in App.tsx.

Q: I need a native Android build for release.
A: Run:
   1) cd tic-tac-toe-classic-7048-7057/tic_tac_toe_frontend
   2) expo prebuild --platform android
   3) cd android && ./gradlew assembleDebug

Q: CI keeps failing with './gradlew: No such file or directory'.
A: The repository is an Expo app with no native Android project by default. Either adjust CI to use Node/Expo scripts (npm ci, npm run lint, npm run web) or generate a native project via Expo prebuild before calling Gradle.
