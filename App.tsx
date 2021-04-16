import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./app/navigation";
import LoadingScreenComponent from "./app/components/LoadingScreen";
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
    return <LoadingScreenComponent />;
  }

  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </RootStoreProvider>
  );
}
