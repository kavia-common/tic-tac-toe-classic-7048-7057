# Changelog (Development)

- UI/UX:
  - Subtle win-line highlighting on the board (visual confirmation)
  - Header now supports an inline help action (help overlay)
  - Auto-reset after game ends for smoother replays (~2s)

- Accessibility:
  - StatusAnnouncer announces win/draw/turn changes

- Code Quality:
  - Components extracted (Header, GameBoard, Buttons, HelpOverlay)
  - Shared tokens in src/theme.ts
  - Flat ESLint config (ignores for configs and native stubs)
  - TS path alias '@/*' mapping

- Docs:
  - README, RUNNING, FAQ, TROUBLESHOOTING, ARCHITECTURE, API, RELEASE_NOTES
  - CI docs and shims for non-native pipelines

- Native (Optional):
  - Expo prebuild path documented for generating a true native Android project
