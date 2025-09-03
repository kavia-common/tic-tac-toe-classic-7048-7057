import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme';

/**
// PUBLIC_INTERFACE
// HelpOverlay
// Minimal, dismissible overlay with brief instructions.
*/
export function HelpOverlay({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>How to Play</Text>
          <Text style={styles.text}>
            - Tap a square to place your mark.
          </Text>
          <Text style={styles.text}>
            - Switch between Player vs Computer and Player vs Player using the mode buttons.
          </Text>
          <Text style={styles.text}>
            - Use Restart to reset the board.
          </Text>
          <Text style={styles.text}>
            - In PvC mode, you are X and the computer is O.
          </Text>

          <Pressable onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeBtnText}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(16,24,40,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: COLORS.subtext,
    marginBottom: 6,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginTop: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  closeBtnText: {
    color: COLORS.secondary,
    fontWeight: '700',
  },
});
