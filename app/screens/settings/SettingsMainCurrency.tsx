import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";

import SearchList from "../../components/View/SearchList";
import { config } from "../../config/config";
import { useStore } from "../../models/root-store/root-store-context";

const SettingsMainCurrency = () => {
  const { mainCurrency } = config;
  const { navigate } = useNavigation();
  const { settings } = useStore();

  const onPressMainCurrencyViewItem = (value: string) => {
    settings.setDefaultMainCurrency(value);
    navigate("settings");
  };

  return (
    <SearchList
      array={mainCurrency.params}
      defaultKey={settings.mainCurrency}
      onPress={onPressMainCurrencyViewItem}
    />
  );
};

export default observer(SettingsMainCurrency);
