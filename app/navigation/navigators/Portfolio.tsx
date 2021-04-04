import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PortfolioTabParamList } from "../types";
import PortfolioScreen from "../../screens/Portfolio";

const PortfolioTabStack = createStackNavigator<PortfolioTabParamList>();

export default function PortfolioNavigator() {
  return (
    <PortfolioTabStack.Navigator>
      <PortfolioTabStack.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{ headerTitle: "Portfolio" }}
      />
    </PortfolioTabStack.Navigator>
  );
}
