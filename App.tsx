import React, { useState, useEffect } from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import ThemeProvider from "./app/providers/ThemeProvider";
import LoadingScreenComponent from "./app/components/LoadingScreen";
import { RootStoreInstance } from "./app/models/root-store/root-store";
import { RootStoreProvider } from "./app/models/root-store/root-store-context";
import { setupRootStore } from "./app/models/root-store/setup-root-store";
import RootNavigator from "./app/navigation/RootNavigator";
import "./app/i18n/i18n";

export default function App() {
  const [rootStore, setRootStore] =
    useState<RootStoreInstance | undefined>(undefined);

  const initStore = async () => {
    const store: RootStoreInstance = await setupRootStore();
    setRootStore(store);
  };

  useEffect(() => {
    initStore();
  }, []);

  if (!rootStore) {
    return <LoadingScreenComponent />;
  }

  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </RootStoreProvider>
  );
}
