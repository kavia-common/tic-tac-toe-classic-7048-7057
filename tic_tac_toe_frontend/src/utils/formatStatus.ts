import type { Player } from '../types';

/**
// PUBLIC_INTERFACE
// formatStatus
// Returns a user-friendly status string given current game state
*/
export function formatStatus({
  winner,
  isDraw,
  xIsNext,
  mode,
  currentPlayer,
}: {
  winner: Player | null;
  isDraw: boolean;
  xIsNext: boolean;
  mode: 'PVP' | 'PVC';
  currentPlayer: Player;
}) {
  if (winner) return winner === 'X' ? 'X wins! 🎉' : 'O wins! 🎉';
  if (isDraw) return "It's a draw. 🤝";
  if (mode === 'PVC') return xIsNext ? 'Your turn (X)' : 'Computer thinking...';
  return `${currentPlayer}'s turn`;
}
