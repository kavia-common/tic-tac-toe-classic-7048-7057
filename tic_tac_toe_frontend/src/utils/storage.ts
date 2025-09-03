import AsyncStorage from '@react-native-async-storage/async-storage';

// PUBLIC_INTERFACE
export async function saveMode(mode: 'PVP' | 'PVC') {
  try {
    await AsyncStorage.setItem('@ttt_mode', mode);
  } catch {
    // ignore
  }
}

// PUBLIC_INTERFACE
export async function loadMode(): Promise<'PVP' | 'PVC' | null> {
  try {
    const v = await AsyncStorage.getItem('@ttt_mode');
    if (v === 'PVP' || v === 'PVC') return v;
  } catch {
    // ignore
  }
  return null;
}
