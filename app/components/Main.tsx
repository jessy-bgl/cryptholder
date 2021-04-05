import React, { useEffect } from "react";
import { Text } from "react-native";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

import { useStore } from "../models/root-store/root-store";

const Main = observer(() => {
  const { t } = useTranslation("common");
  const { coins } = useStore();

  useEffect(() => {
    async function fetchCoinsMarketsData() {
      await coins.getMarketData();
    }
    fetchCoinsMarketsData();
  }, []);

  return (
    <>
      <Text>{t("home")}</Text>
    </>
  );
});

export default Main;
