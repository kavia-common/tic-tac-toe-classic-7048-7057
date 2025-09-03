import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../theme';

/**
// PUBLIC_INTERFACE
// ModeButton
// A segmented control-like button for selecting game mode.
*/
export function ModeButton({
  label,
  active,
  onPress,
  variant = 'solid',
}: {
  label: string;
  active?: boolean;
  onPress: () => void;
  variant?: 'solid' | 'outline';
}) {
  const base = [
    styles.modeButton,
    variant === 'solid'
      ? {
          backgroundColor: active ? COLORS.primary : '#101828',
        }
      : {
          backgroundColor: COLORS.secondary,
          borderColor: active ? COLORS.primary : '#e4e7ec',
          borderWidth: 1,
        },
  ];

  const labelStyle = [
    styles.modeButtonText,
    variant === 'solid'
      ? { color: COLORS.secondary }
      : { color: active ? COLORS.primary : '#101828' },
  ];

  return (
    <Pressable style={base} onPress={onPress}>
      <Text style={labelStyle}>{label}</Text>
    </Pressable>
  );
}

/**
// PUBLIC_INTERFACE
// PrimaryButton
// Main action button (e.g., Restart).
*/
export function PrimaryButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  modeButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  modeButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
  },
  primaryButtonText: {
    color: COLORS.secondary,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
});
