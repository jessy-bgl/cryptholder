import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import { StatusBar } from "expo-status-bar";

import useColorScheme from "./app/utils/useColorScheme";
import Navigation from "./app/navigation";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}
