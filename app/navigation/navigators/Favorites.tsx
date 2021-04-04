import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {useTranslation} from 'react-i18next';
import { FavoritesTabParamList } from "../types";
import FavoritesScreen from "../../screens/Favorites";

const FavoritesTabStack = createStackNavigator<FavoritesTabParamList>();

export default function FavoritesNavigator() {
  const {t} = useTranslation('common');

  return (
    <FavoritesTabStack.Navigator>
      <FavoritesTabStack.Screen
        name={t("favorites")}
        component={FavoritesScreen}
        options={{ headerTitle: t("favorites") }}
      />
    </FavoritesTabStack.Navigator>
  );
}
