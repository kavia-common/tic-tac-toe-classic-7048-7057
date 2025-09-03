import React, { useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { COLORS } from './src/theme';
import { StatusAnnouncer } from './src/components/StatusAnnouncer';
import { GameBoard } from './src/components/GameBoard';
import { Header } from './src/components/Header';
import { ModeButton, PrimaryButton } from './src/components/Buttons';
import { getWinLine } from './src/utils/winLine';
import { HelpOverlay } from './src/components/HelpOverlay';
import { loadMode, saveMode } from './src/utils/storage';

type Player = 'X' | 'O';
type Mode = 'PVP' | 'PVC';

type Board = Array<Player | null>; // length 9

const initialBoard: Board = Array(9).fill(null);

/**
 * Checks winner on a 3x3 board.
 */
import { WIN_LINES } from './src/constants/board';
function getWinner(board: Board): Player | null {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function isBoardFull(board: Board) {
  return board.every((cell) => cell !== null);
}

/**
 * Basic but competent AI:
 * 1) Win if possible
 * 2) Block opponent if they can win next
 * 3) Pick center, then corners, then sides
 */
function getComputerMove(board: Board, computer: Player, human: Player): number | null {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ] as const;

  // 1) Win if possible
  for (const [a, b, c] of lines) {
    const line = [board[a], board[b], board[c]];
    const countComp = line.filter((v) => v === computer).length;
    const countEmpty = line.filter((v) => v === null).length;
    if (countComp === 2 && countEmpty === 1) {
      const idx = [a, b, c].find((i) => board[i] === null)!;
      return idx;
    }
  }

  // 2) Block human winning
  for (const [a, b, c] of lines) {
    const line = [board[a], board[b], board[c]];
    const countHuman = line.filter((v) => v === human).length;
    const countEmpty = line.filter((v) => v === null).length;
    if (countHuman === 2 && countEmpty === 1) {
      const idx = [a, b, c].find((i) => board[i] === null)!;
      return idx;
    }
  }

  // 3) Priorities: center -> corners -> sides
  const priorities = [4, 0, 2, 6, 8, 1, 3, 5, 7];
  for (const i of priorities) {
    if (board[i] === null) return i;
  }

  return null;
}

export default function App() {
  const [mode, setMode] = useState<Mode>('PVC');

  // Load persisted mode on mount
  React.useEffect(() => {
    (async () => {
      const m = await loadMode();
      if (m) {
        setMode(m);
      }
    })();
  }, []);
  const [board, setBoard] = useState<Board>(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = useMemo(() => getWinner(board), [board]);
  const isDraw = useMemo(() => !winner && isBoardFull(board), [board, winner]);

  const currentPlayer: Player = xIsNext ? 'X' : 'O';

  const onTilePress = (idx: number) => () => {
    if (board[idx] !== null || winner || isDraw) return;

    // light haptics (best-effort)
    import('./src/utils/haptics').then(m => m.tickLight?.()).catch(() => {});

    // Human move
    const next = [...board];
    next[idx] = currentPlayer;
    setBoard(next);
    setXIsNext((prev) => !prev);
  };

  // If in Player vs Computer mode, let the computer respond
  React.useEffect(() => {
    if (mode !== 'PVC') return;
    if (winner || isDraw) return;
    // In PVC, human is always 'X', computer is 'O'
    if (xIsNext) return; // wait for human 'X'
    // computer turn (as 'O')
    const move = getComputerMove(board, 'O', 'X');
    if (move !== null) {
      const t = setTimeout(() => {
        setBoard((prev) => {
          if (prev[move] !== null) return prev; // safeguard
          const next = [...prev];
          next[move] = 'O';
          return next;
        });
        setXIsNext(true);
      }, 250); // small delay for UX
      return () => clearTimeout(t);
    }
  }, [mode, xIsNext, board, winner, isDraw]);

  const resetGame = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const switchMode = (m: Mode) => {
    // Reset immediately on mode switch for a clean start
    setMode(m);
    saveMode(m).catch(() => {});
    resetGame();
  };

  // Auto-reset a short time after a game ends to keep gameplay flowing
  React.useEffect(() => {
    if (!winner && !isDraw) return;
    const t = setTimeout(() => {
      resetGame();
    }, 2000);
    return () => clearTimeout(t);
  }, [winner, isDraw]);

  const statusText = useMemo(() => {
    if (winner) {
      return winner === 'X' ? 'X wins! 🎉' : 'O wins! 🎉';
    }
    if (isDraw) return "It's a draw. 🤝";
    if (mode === 'PVC') {
      return xIsNext ? 'Your turn (X)' : 'Computer thinking...';
    }
    return `${currentPlayer}'s turn`;
  }, [winner, isDraw, xIsNext, mode, currentPlayer]);

  const statusColor = winner
    ? COLORS.win
    : isDraw
    ? COLORS.draw
    : COLORS.text;

  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Header onHelp={() => setHelpOpen(true)} />

        <View style={styles.modeRow}>
          <ModeButton
            label="Player vs Computer"
            active={mode === 'PVC'}
            onPress={() => switchMode('PVC')}
          />
          <ModeButton
            label="Player vs Player"
            active={mode === 'PVP'}
            onPress={() => switchMode('PVP')}
            variant="outline"
          />
        </View>

        {/* Board */}
        <GameBoard
          board={board}
          onTilePress={(i) => onTilePress(i)}
          disabled={!!winner || isDraw || (mode === 'PVC' && !xIsNext)}
          winLine={winner ? getWinLine(board) : null}
        />

        <View style={styles.statusArea}>
          <Text style={[styles.statusText, { color: statusColor }]}>{statusText}</Text>
          <StatusAnnouncer text={statusText} />
        </View>

        <View style={styles.controls}>
          <PrimaryButton label="Restart" onPress={resetGame} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Mode: {mode === 'PVC' ? 'Player vs Computer' : 'Player vs Player'}</Text>
        </View>

        <HelpOverlay visible={helpOpen} onClose={() => setHelpOpen(false)} />
      </View>
    </SafeAreaView>
  );
}



/**
 * Mode selection button component.
 * PUBLIC_INTERFACE
 * Props:
 * - label: string to render on the button
 * - active: highlights the button if the mode is selected
 * - onPress: click handler to switch modes
 * - variant: 'solid' | 'outline' for visual style
 */
function ModeButton({
  label,
  active,
  onPress,
  variant = 'solid',
}: {
  /** Button label */
  label: string;
  /** Whether this mode is currently active */
  active?: boolean;
  /** Press handler */
  onPress: () => void;
  /** Style variant */
  variant?: 'solid' | 'outline';
}) {
  const base = [
    styles.modeButton,
    variant === 'solid'
      ? {
          backgroundColor: active ? COLORS.primary : COLORS.text,
        }
      : {
          backgroundColor: COLORS.secondary,
          borderColor: active ? COLORS.primary : COLORS.border,
          borderWidth: 1,
        },
  ];

  const labelStyle = [
    styles.modeButtonText,
    variant === 'solid'
      ? { color: COLORS.secondary }
      : { color: active ? COLORS.primary : COLORS.text },
  ];

  return (
    <Pressable style={base} onPress={onPress}>
      <Text style={labelStyle}>{label}</Text>
    </Pressable>
  );
}

/**
 * Primary action button.
 * PUBLIC_INTERFACE
 * Props:
 * - label: text to show on the button
 * - onPress: press handler for the action
 */
function PrimaryButton({
  label,
  onPress,
}: {
  /** Button label */
  label: string;
  /** Press handler */
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
  },
  header: {
    width: '100%',
    paddingTop: 12,
    paddingBottom: 8,
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.subtext,
  },
  modeRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  modeButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: COLORS.shadow,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    elevation: 2,
  },
  modeButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },

  statusArea: {
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 28,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '700',
  },
  controls: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
    shadowColor: COLORS.shadow,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
    elevation: 4,
  },
  primaryButtonText: {
    color: COLORS.secondary,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.3,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: COLORS.subtext,
  },
});
