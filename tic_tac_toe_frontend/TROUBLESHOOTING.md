# Troubleshooting

Board doesn’t respond to taps:
- Ensure the game isn’t over (win or draw). It auto-resets after ~2s.
- In Player vs Computer, the computer moves as O; wait briefly after your move.

Mode switched but board didn’t reset:
- The app resets automatically when switching modes. If needed, tap Restart.

Status says “Computer thinking…” for too long:
- The AI uses a short delay (~250ms) for UX; if it seems stuck, press Restart.

Can’t see the board:
- Make sure you’re running in web or Expo Go: `npm run web` or `npm start`.

Need a native Android build:
- This is an Expo app by default (no native project).
- Generate one:
  1) `expo prebuild --platform android`
  2) `cd android && ./gradlew assembleDebug`
