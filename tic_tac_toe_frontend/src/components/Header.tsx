import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme';
import { APP } from '../constants/app';

/**
// PUBLIC_INTERFACE
// Header
// Minimal app header with title and subtitle, consistent with modern light theme.
*/
export function Header({ onHelp }: { onHelp?: () => void }) {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <Text style={styles.title}>{APP.name}</Text>
        {onHelp ? (
          <Pressable style={styles.helpBtn} onPress={onHelp} accessibilityLabel="Help">
            <Text style={styles.helpBtnText}>?</Text>
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.subtitle}>Simple. Modern. Minimal.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 12,
    paddingBottom: 8,
    alignItems: 'center',
    gap: 4,
  },
  row: {
    width: '100%',
    maxWidth: 600,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: 0.2,
  },
  helpBtn: {
    marginLeft: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.tile,
  },
  helpBtnText: {
    color: COLORS.text,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.subtext,
  },
});
