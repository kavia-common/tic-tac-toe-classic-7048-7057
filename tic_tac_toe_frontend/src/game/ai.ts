export type Player = 'X' | 'O';
export type Board = Array<Player | null>;
import { WIN_LINES } from '../constants/board';

/**
/ PUBLIC_INTERFACE
/ getBestMove
/ A placeholder for a more advanced AI (e.g., minimax).
/ Currently, prefer center -> corners -> sides. Mirrors the logic used in App for consistency.
/ This is provided as a separate module for future expansion without touching UI.
*/
export function getBestMove(board: Board, computer: Player, human: Player): number | null {
  // Try win
  for (const [a, b, c] of WIN_LINES) {
    const line = [board[a], board[b], board[c]];
    const comp = line.filter((v) => v === computer).length;
    const empty = line.filter((v) => v === null).length;
    if (comp === 2 && empty === 1) {
      const idx = [a, b, c].find((i) => board[i] === null)!;
      return idx;
    }
  }
  // Try block
  for (const [a, b, c] of lines) {
    const line = [board[a], board[b], board[c]];
    const hum = line.filter((v) => v === human).length;
    const empty = line.filter((v) => v === null).length;
    if (hum === 2 && empty === 1) {
      const idx = [a, b, c].find((i) => board[i] === null)!;
      return idx;
    }
  }

  const priorities = [4, 0, 2, 6, 8, 1, 3, 5, 7];
  for (const i of priorities) {
    if (board[i] === null) return i;
  }
  return null;
}
