import React, { useEffect, useRef } from 'react';
import { AccessibilityInfo, findNodeHandle, Text } from 'react-native';

/**
// PUBLIC_INTERFACE
// StatusAnnouncer
// Announces status text changes for accessibility (screen readers).
// Usage: <StatusAnnouncer text={statusText} />
*/
export function StatusAnnouncer({ text }: { text: string }) {
  const ref = useRef<Text | null>(null);

  useEffect(() => {
    const node = findNodeHandle(ref.current);
    if (node) {
      // Announce the change for screen readers
      AccessibilityInfo.announceForAccessibility?.(text);
    }
  }, [text]);

  return (
    <Text
      ref={ref}
      accessibilityLiveRegion="polite"
      accessible
      accessibilityRole="text"
      style={{ position: 'absolute', height: 0, width: 0, opacity: 0 }}
    >
      {text}
    </Text>
  );
}
