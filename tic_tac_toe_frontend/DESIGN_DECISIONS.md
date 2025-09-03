# Design Decisions

Purpose:
A simple, modern, minimal Tic Tac Toe frontend that is responsive, accessible, and easy to maintain.

UI/UX:
- Centered square board (3x3), responsive on mobile and desktop
- Controls (mode switches and Restart) below the board for discoverability
- Light theme with minimal chrome; emphasis on clarity and contrast
- Provided palette:
  - primary: #2467ec
  - secondary: #ffffff
  - accent: #ffba08
- Subtle win-line highlighting to confirm outcome visually

Gameplay:
- Modes: Player vs Computer (default), Player vs Player
- In PvC, the user is X (first move), computer is O
- Basic AI heuristic: win -> block -> center -> corners -> sides (maintainable and fast)
- Auto-reset shortly after a game ends for quick replays

Accessibility:
- StatusAnnouncer announces state changes for screen readers
- Clear status text (win/lose/draw/turn)
- Button sizes and spacing accommodate touch

Architecture:
- App.tsx: state, mode, status, AI effect, and top-level layout
- Components: Header, GameBoard, Buttons, HelpOverlay, StatusAnnouncer
- Shared: theme tokens (COLORS/spacing), types, utils (winLine, status formatter), constants
- Path aliases for clean imports (tsconfig)

Maintainability:
- Flat ESLint config (modern), Prettier, TypeScript strict
- Barrel exports for common modules (src/index.ts)
- Docs: README, RUNNING, FAQ, ARCHITECTURE, API, RELEASE_NOTES

Native Builds (Optional):
- Expo app by default; no Android project generated
- If native build required: expo prebuild --platform android, then use ./android/gradlew

Rationale:
- Keep footprint small, avoid heavy dependencies
- Prioritize clarity and responsiveness over excessive visual flourishes
- Maintain a separation between UI and logic to ease future evolution (e.g., harder AI)
