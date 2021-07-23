import React, { useState, useEffect } from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";

import Navigation from "./app/navigation";
import { RootStoreInstance } from "./app/models/root-store/root-store";
import { RootStoreProvider } from "./app/models/root-store/root-store-context";
import { setupRootStore } from "./app/models/root-store/setup-root-store";
import "./app/i18n/i18n";

export default function App() {
  const [rootStore, setRootStore] = useState<RootStoreInstance | undefined>(
    undefined
  );

  useEffect(() => {
    setupRootStore().then(setRootStore);
  }, []);

  if (!rootStore) {
    return <AppLoading />;
  }

  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Navigation />
      </SafeAreaProvider>
    </RootStoreProvider>
  );
}
