import * as Haptics from 'expo-haptics';

// PUBLIC_INTERFACE
export async function tickLight() {
  try {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  } catch {
    // no-op if not supported
  }
}
