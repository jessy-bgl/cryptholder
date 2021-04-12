import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useColorScheme from "./app/utils/useColorScheme";
import Navigation from "./app/navigation";
import LoadingScreenComponent from "./app/components/LoadingScreen";
import { initializeI18n } from "./app/i18n/i18n";
import { RootStoreInstance } from "./app/models/root-store/root-store";
import { RootStoreProvider } from "./app/models/root-store/root-store-context";
import { setupRootStore } from "./app/models/root-store/setup-root-store";

export default function App() {
  const colorScheme = useColorScheme();
  const [rootStore, setRootStore] = useState<RootStoreInstance | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      await initializeI18n();
      setupRootStore().then(setRootStore);
    })();
  }, []);

  if (!rootStore) {
    return <LoadingScreenComponent />;
  }

  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    </RootStoreProvider>
  );
}
