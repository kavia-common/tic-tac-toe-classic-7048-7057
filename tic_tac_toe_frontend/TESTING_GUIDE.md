# Testing Guide

Quick checks (web/Expo):
1) npm install
2) npm run web

Verify:
- Layout: Board is centered and square. Controls under the board.
- PvC mode (default): You are X. Play center; AI responds as O. Win/block behavior works.
- PvP mode: Switch mode; two players alternate turns with X/O.
- Status text: Shows current turn, win (X/O), and draw states clearly.
- Restart: Tap "Restart" resets board and status.
- Win highlighting: Winning line tiles show a subtle highlight.
- Accessibility: Status changes are announced (screen readers).

Edge cases:
- Tapping occupied cells: No change.
- Game after win/draw: Auto-resets after a short delay (App.tsx effect).
- Mode switch: Board resets and new mode is active.

Native (optional):
- expo prebuild --platform android
- cd android && ./gradlew assembleDebug
