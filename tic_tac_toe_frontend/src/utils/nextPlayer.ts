import type { Player } from '../types';

// PUBLIC_INTERFACE
export function nextPlayer(xIsNext: boolean): Player {
  return xIsNext ? 'X' : 'O';
}
