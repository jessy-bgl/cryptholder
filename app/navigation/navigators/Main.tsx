import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {useTranslation} from 'react-i18next';
import { MainTabParamList } from "../types";
import MainScreen from "../../screens/Main";

const MainTabStack = createStackNavigator<MainTabParamList>();

export default function MainNavigator() {
  const {t} = useTranslation('common');

  return (
    <MainTabStack.Navigator>
      <MainTabStack.Screen
        name={t("home")}
        component={MainScreen}
        options={{ headerTitle: t("home") }}
      />
    </MainTabStack.Navigator>
  );
}
