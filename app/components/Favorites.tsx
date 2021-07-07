import React, { useState, useEffect } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { DataTable } from "react-native-paper";

import { ICoinMarkets } from "../models/coin/coin-markets-model";
import { useStore } from "../models/root-store/root-store-context";

import MarketCoinRow from "../components/DataTable/MarketCoinRow";

const Favorites = () => {
  const { coins } = useStore();
  const { market, favorites } = coins;

  const { t } = useTranslation("market");

  const [loadingMarketData, setLoadingMarketData] = useState(false);

  useEffect(() => {
    async function fetchCoinsMarketsData() {
      setLoadingMarketData(true);
      await coins.reloadCoinsMarketsData();
      setLoadingMarketData(false);
    }
    if (!market.length) fetchCoinsMarketsData();
  }, []);

  const refreshData = React.useCallback(() => {
    setLoadingMarketData(true);
    coins.reloadCoinsMarketsData().then(() => setLoadingMarketData(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={loadingMarketData}
          onRefresh={refreshData}
        />
      }
    >
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>{t("name")}</DataTable.Title>
          <DataTable.Title numeric>{t("cap_24h")}</DataTable.Title>
          <DataTable.Title numeric>{t("price_24h")}</DataTable.Title>
        </DataTable.Header>
        {market
          .filter((coin) => favorites.indexOf(coin.id) >= 0)
          .map((coin: ICoinMarkets) => (
            <MarketCoinRow {...coin} key={coin.id} />
          ))}
      </DataTable>
    </ScrollView>
  );
};

export default observer(Favorites);
