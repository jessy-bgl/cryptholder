import React, { useEffect } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";

import { useStore } from "../models/root-store/root-store";
import MainComponent from "../components/Main";

export const MainScreen = observer(function Main() {
  const { coins } = useStore();
  const { marketData } = coins;

  useEffect(() => {
    async function fetchCoinsMarketsData() {
      await coins.getMarketData();
    }
    fetchCoinsMarketsData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MainComponent />
    </View>
  );
});

export default MainScreen;
