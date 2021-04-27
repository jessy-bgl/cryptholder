import React, { useState, useEffect } from "react";
import { RefreshControl, StyleSheet, FlatList } from "react-native";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { DataTable } from "react-native-paper";

import { ICoin } from "../models/coin/coin-model";
import { useStore } from "../models/root-store/root-store-context";
import MarketCoinRow from "../components/DataTable/MarketCoinRow";
import { SafeAreaView } from "react-native-safe-area-context";

const Main = () => {
  const { market } = useStore();
  const { coins } = market;

  const { t } = useTranslation("market");

  const [loadingMarketData, setLoadingMarketData] = useState(false);

  const onRefresh = React.useCallback(() => {
    setLoadingMarketData(true);
    market.reloadCoinsData().then(() => setLoadingMarketData(false));
  }, []);

  useEffect(() => {
    async function fetchCoinsMarketsData() {
      setLoadingMarketData(true);
      await market.reloadCoinsData();
      setLoadingMarketData(false);
    }
    fetchCoinsMarketsData();
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return <MarketCoinRow key={item.id} {...item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={coins}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={loadingMarketData}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%" },
});

export default observer(Main);
