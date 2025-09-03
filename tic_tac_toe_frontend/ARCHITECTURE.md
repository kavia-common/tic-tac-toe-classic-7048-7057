# Architecture

This Expo (React Native) app is organized for clarity and future extensibility.

Key files:
- App.tsx
  - App shell, state for game (board, turn, mode), AI effect for PvC, status text, and controls.
  - Uses components for Header, GameBoard, Buttons, and StatusAnnouncer.
- src/theme.ts
  - Color tokens and spacing for a modern, minimal, light theme.
- src/types.ts
  - Shared Player and Board types.
- src/components/
  - Header.tsx: Title + subtitle.
  - GameBoard.tsx: Responsive 3x3 board and tiles.
  - Buttons.tsx: ModeButton (segmented control style) and PrimaryButton (Restart).
  - StatusAnnouncer.tsx: Accessible status announcements for screen readers.
- src/utils/winLine.ts
  - Utility to compute the winning line (future enhancement: highlight).
- src/game/ai.ts
  - A simple AI move selector; can be replaced with minimax later.
- web/index.html, web/manifest.json
  - Minimal web scaffolding for Expo web preview.

Gameplay:
- Modes: PvC (default), PvP.
- Turn logic: Human is X (PvC); Computer plays O with a basic heuristic.
- Status: Win, draw, or current turn (with “Computer thinking…” for PvC).

Extensibility ideas:
- Replace AI with minimax from src/game/ai.ts.
- Use getWinLine to highlight winning cells.
- Add settings (first player toggle, AI difficulty).

Run:
- npm install
- npm run web (or npm start)

Native:
- expo prebuild --platform android
- cd android && ./gradlew assembleDebug
