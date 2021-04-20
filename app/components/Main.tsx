import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { DataTable } from "react-native-paper";

import { ICoin } from "../models/coin/coin-model";
import { useStore } from "../models/root-store/root-store-context";
import MarketCoinRow from "../components/DataTable/MarketCoinRow";

const Main = () => {
  const { market } = useStore();
  const { coins } = market;

  const { t } = useTranslation("market");

  const [loadingMarketData, setLoadingMarketData] = useState(false);

  useEffect(() => {
    async function fetchCoinsMarketsData() {
      setLoadingMarketData(true);
      await market.reloadCoinsData();
      setLoadingMarketData(false);
    }
    fetchCoinsMarketsData();
  }, []);

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>{t("name")}</DataTable.Title>
          <DataTable.Title numeric>{t("cap_24h")}</DataTable.Title>
          <DataTable.Title numeric>{t("price_24h")}</DataTable.Title>
        </DataTable.Header>
        {coins.map((coin: ICoin) => (
          <MarketCoinRow {...coin} key={coin.id} />
        ))}
      </DataTable>
    </ScrollView>
  );
};

export default observer(Main);
