import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useColorScheme from "./app/utils/useColorScheme";
import Navigation from "./app/navigation";
import LoadingScreenComponent from "./app/components/LoadingScreen";
import { initializeI18n } from "./app/i18n/i18n";
import { Provider, rootStore } from "./app/models/root-store/root-store";

export default function App() {
  const colorScheme = useColorScheme();
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    (async () => {
      await initializeI18n();
      setIsBootstrapping(false);
    })();
  }, []);
  if (isBootstrapping) {
    return <LoadingScreenComponent />;
  }

  return (
    <Provider value={rootStore}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    </Provider>
  );
}
