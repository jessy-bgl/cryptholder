import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import Navigation from "./app/navigation";
import LoadingScreenComponent from "./app/components/LoadingScreen";
import { initializeI18n } from "./app/i18n/i18n";
import { RootStoreInstance } from "./app/models/root-store/root-store";
import { RootStoreProvider } from "./app/models/root-store/root-store-context";
import { setupRootStore } from "./app/models/root-store/setup-root-store";

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: "#344966",
    background: "#F0F4EF",
    surface: "#B4CDED",
    accent: "#344966",
    error: "#BFCC94",
    text: "#0D1821",
    onSurface: "#fff",
    onBackground: "#fff",
    disabled: "#fff",
    placeholder: "#fff",
    backdrop: "#fff",
    notification: "#fff",
  },
};

export default function App() {
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
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </SafeAreaProvider>
    </RootStoreProvider>
  );
}
