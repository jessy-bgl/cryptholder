import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {useTranslation} from 'react-i18next';
import { SettingsTabParamList } from "../types";
import SettingsScreen from "../../screens/Settings";

const SettingsTabStack = createStackNavigator<SettingsTabParamList>();

export default function SettingsNavigator() {
  const {t} = useTranslation('common');

  return (
    <SettingsTabStack.Navigator>
      <SettingsTabStack.Screen
        name={t("settings")}
        component={SettingsScreen}
        options={{ headerTitle: t("settings") }}
      />
    </SettingsTabStack.Navigator>
  );
}
