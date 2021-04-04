import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import { StatusBar } from "expo-status-bar";

import useColorScheme from "./app/utils/useColorScheme";
import Navigation from "./app/navigation";
import LoadingScreenComponent from "./app/components/LoadingScreen";
import { initializeI18n } from "./app/services/i18n/i18n";

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
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}
