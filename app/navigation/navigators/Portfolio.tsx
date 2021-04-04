import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { PortfolioTabParamList } from "../types";
import PortfolioScreen from "../../screens/Portfolio";

const PortfolioTabStack = createStackNavigator<PortfolioTabParamList>();

export default function PortfolioNavigator() {
  const { t } = useTranslation("common");

  return (
    <PortfolioTabStack.Navigator>
      <PortfolioTabStack.Screen
        name={t("portfolio")}
        component={PortfolioScreen}
        options={{ headerTitle: t("portfolio") }}
      />
    </PortfolioTabStack.Navigator>
  );
}
