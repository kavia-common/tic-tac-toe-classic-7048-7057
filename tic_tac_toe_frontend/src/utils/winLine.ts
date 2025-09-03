import type { Board } from '../types';
import { WIN_LINES } from '../constants/board';

/**
// PUBLIC_INTERFACE
// getWinLine
// Returns the indexes that form a winning line, if any; otherwise null.
*/
export function getWinLine(board: Board): [number, number, number] | null {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return [a, b, c];
    }
  }
  return null;
}
