# Help

Tic Tac Toe (Expo)

Features:
- 3x3 responsive board
- Modes: Player vs Computer (default) and Player vs Player
- Status: shows current turn, win, or draw
- Restart button below the board
- Light, modern, minimal UI using the provided palette

Controls:
- Tap a square to play your move.
- Use the mode buttons under the header to switch between PvC and PvP.
- Tap "Restart" to reset the game at any time.

Tips:
- In PvC mode, you play 'X' and the computer plays 'O'.
- The computer will try to win, block, then take center/corners.

Run (web/Expo Go):
- npm install
- npm run web (or npm start)

Native Android build (optional):
- expo prebuild --platform android
- cd android && ./gradlew assembleDebug
