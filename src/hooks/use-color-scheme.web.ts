import { useSyncExternalStore } from 'react';
import { Appearance } from 'react-native';

function subscribeToColorScheme(onStoreChange: () => void) {
  const subscription = Appearance.addChangeListener(onStoreChange);
  return () => subscription.remove();
}

function getServerColorScheme() {
  return 'light' as const;
}

export function useColorScheme() {
  return useSyncExternalStore(
    subscribeToColorScheme,
    Appearance.getColorScheme,
    getServerColorScheme,
  );
}
