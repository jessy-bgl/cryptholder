import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {useTranslation} from 'react-i18next';
import { AlertsTabParamList } from "../types";
import AlertsScreen from "../../screens/Alerts";

const AlertsTabStack = createStackNavigator<AlertsTabParamList>();

export default function AlertsNavigator() {
  const {t} = useTranslation('common');

  return (
    <AlertsTabStack.Navigator>
      <AlertsTabStack.Screen
        name={t("alerts")}
        component={AlertsScreen}
        options={{ headerTitle: t("alerts") }}
      />
    </AlertsTabStack.Navigator>
  );
}
