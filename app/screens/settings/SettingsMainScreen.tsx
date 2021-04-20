import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";

import SearchList from "../../components/View/SearchList";
import { config } from "../../config/config";
import { useStore } from "../../models/root-store/root-store-context";

const SettingsMainScreen = () => {
  const { mainScreen } = config;
  const { navigate } = useNavigation();
  const { settings } = useStore();

  const onPressMainScreenViewItem = (value: string) => {
    settings.setDefaultMainScreen(value);
    navigate("settings");
  };

  return (
    <SearchList
      array={mainScreen.params}
      defaultKey={settings.mainScreen}
      onPress={onPressMainScreenViewItem}
    />
  );
};

export default observer(SettingsMainScreen);
