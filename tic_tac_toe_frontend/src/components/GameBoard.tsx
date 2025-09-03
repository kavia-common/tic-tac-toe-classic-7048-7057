import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';

export type Player = 'X' | 'O';
export type Board = Array<Player | null>;

const COLORS = {
  primary: '#2467ec',
  secondary: '#ffffff',
  accent: '#ffba08',
  border: '#e4e7ec',
  tile: '#f7f9fc',
};

/**
// PUBLIC_INTERFACE
// GameBoard
// A 3x3 board for Tic Tac Toe with a minimal, modern look.
// Props:
// - board: current 9-cell board values
// - onTilePress: handler to invoke when a tile is pressed (receives index)
// - disabled: disable interactions globally (e.g., when game over or AI thinking)
*/
export function GameBoard({
  board,
  onTilePress,
  disabled,
  winLine,
}: {
  board: Board;
  onTilePress: (index: number) => (e: GestureResponderEvent) => void;
  disabled?: boolean;
  winLine?: [number, number, number] | null;
}) {
  return (
    <View style={styles.boardWrapper}>
      <View style={styles.board}>
        {board.map((cell, i) => {
          const isWinning = winLine?.includes(i as any) ?? false;
          return (
            <Tile
              key={i}
              value={cell}
              onPress={onTilePress(i)}
              disabled={disabled || !!cell}
              highlight={isWinning}
            />
          );
        })}
        {/* grid overlay */}
        <View style={[styles.line, styles.lineH, { top: '33.333%' }]} />
        <View style={[styles.line, styles.lineH, { top: '66.666%' }]} />
        <View style={[styles.line, styles.lineV, { left: '33.333%' }]} />
        <View style={[styles.line, styles.lineV, { left: '66.666%' }]} />
      </View>
    </View>
  );
}

function Tile({
  value,
  onPress,
  disabled,
  highlight,
}: {
  value: Player | null;
  onPress: (e: GestureResponderEvent) => void;
  disabled?: boolean;
  highlight?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.tile,
        highlight ? styles.tileHighlight : null,
        pressed && !disabled ? { transform: [{ scale: 0.98 }] } : null,
      ]}
      android_ripple={{ color: COLORS.border }}
    >
      <Text
        style={[
          styles.tileMark,
          value === 'X' && { color: COLORS.primary },
          value === 'O' && { color: COLORS.accent },
        ]}
      >
        {value ?? ''}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boardWrapper: {
    width: '100%',
    maxWidth: 380,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    width: '90%',
    aspectRatio: 1,
    backgroundColor: COLORS.tile,
    borderRadius: 22,
    padding: 8,

    // grid layout
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
  },
  tile: {
    width: '33.3333%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileMark: {
    fontSize: 56,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.primary,
  },
  tileHighlight: {
    backgroundColor: 'rgba(36, 103, 236, 0.08)',
    borderRadius: 8,
  },
  line: {
    position: 'absolute',
    backgroundColor: COLORS.border,
  },
  lineH: {
    left: '5%',
    right: '5%',
    height: 2,
    borderRadius: 1,
  },
  lineV: {
    top: '5%',
    bottom: '5%',
    width: 2,
    borderRadius: 1,
  },
});
