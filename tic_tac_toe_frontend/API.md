# Public API

This document summarizes the public interfaces exposed within the app for reuse and maintenance.

Components

- Header (src/components/Header.tsx)
  - PUBLIC_INTERFACE
  - Minimal header with title/subtitle.
  - Props: none

- GameBoard (src/components/GameBoard.tsx)
  - PUBLIC_INTERFACE
  - Renders a responsive 3x3 grid with modern, minimal styling.
  - Props:
    - board: (Player | null)[] — 9-length array of cell values
    - onTilePress: (index: number) => (e: GestureResponderEvent) => void — tile press handler factory
    - disabled?: boolean — disables interaction (e.g., winner/draw/AI turn)
    - winLine?: [number, number, number] | null — optional winning triple to highlight

- ModeButton (src/components/Buttons.tsx)
  - PUBLIC_INTERFACE
  - Segmented control style button for selecting mode.
  - Props:
    - label: string
    - active?: boolean
    - onPress: () => void
    - variant?: 'solid' | 'outline'

- PrimaryButton (src/components/Buttons.tsx)
  - PUBLIC_INTERFACE
  - Primary action button (e.g., Restart).
  - Props:
    - label: string
    - onPress: () => void

- StatusAnnouncer (src/components/StatusAnnouncer.tsx)
  - PUBLIC_INTERFACE
  - Announces status updates for accessibility.
  - Props:
    - text: string

Utilities

- getWinLine (src/utils/winLine.ts)
  - PUBLIC_INTERFACE
  - Returns [a,b,c] winning indexes or null.

- formatStatus (src/utils/formatStatus.ts)
  - PUBLIC_INTERFACE
  - Returns a user-friendly status string from winner/draw/turn/mode.

Game AI

- getBestMove (src/game/ai.ts)
  - PUBLIC_INTERFACE
  - Basic heuristic: win -> block -> center -> corners -> sides.
  - Signature: (board, computer, human) => index | null

Theme and Types

- COLORS, SPACING (src/theme.ts)
  - Design tokens for the light, modern, minimal UI.

- Player, Board (src/types.ts)
  - Core types for the 3x3 game.

Barrel

- src/index.ts
  - PUBLIC_INTERFACE
  - Re-exports common modules/components for convenience.
