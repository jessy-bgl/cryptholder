import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FavoritesTabParamList } from "../types";
import FavoritesScreen from "../../screens/Favorites";

const FavoritesTabStack = createStackNavigator<FavoritesTabParamList>();

export default function FavoritesNavigator() {
  return (
    <FavoritesTabStack.Navigator>
      <FavoritesTabStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ headerTitle: "Favorites" }}
      />
    </FavoritesTabStack.Navigator>
  );
}
