import React from "react";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";

import SearchList from "../../components/View/SearchList";
import { config } from "../../config/config";
import { useStore } from "../../models/root-store/root-store-context";

const SettingsLanguage = () => {
  const { language } = config;
  const { navigate } = useNavigation();
  const { settings } = useStore();

  const onPressSearchViewItem = (value: string) => {
    settings.setDefaultLang(value);
    navigate("settings");
  };

  return (
    <SearchList
      array={language.params}
      defaultKey={settings.language}
      onPress={onPressSearchViewItem}
    />
  );
};

export default observer(SettingsLanguage);
