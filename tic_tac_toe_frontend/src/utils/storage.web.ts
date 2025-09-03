const KEY = '@ttt_mode';

// PUBLIC_INTERFACE
export async function saveMode(mode: 'PVP' | 'PVC') {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(KEY, mode);
    }
  } catch {
    // ignore
  }
}

// PUBLIC_INTERFACE
export async function loadMode(): Promise<'PVP' | 'PVC' | null> {
  try {
    if (typeof localStorage !== 'undefined') {
      const v = localStorage.getItem(KEY);
      if (v === 'PVP' || v === 'PVC') return v;
    }
  } catch {
    // ignore
  }
  return null;
}
