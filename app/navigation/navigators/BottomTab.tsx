import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BottomNavigation, Text } from "react-native-paper";
import { useTranslation } from "react-i18next";

import MainView from "../../screens/Main";
import FavoritesView from "../../screens/Favorites";
import PortfolioView from "../../screens/Portfolio";
import AlertsView from "../../screens/Alerts";
import SettingsView from "../../screens/Settings";

const MainRoute = () => <MainView />;
const FavoritesRoute = () => <FavoritesView />;
const PortfolioRoute = () => <PortfolioView />;
const AlertsRoute = () => <AlertsView />;
const SettingsRoute = () => <SettingsView />;

const BottomTabView = () => {
  const [index, setIndex] = React.useState(0);
  const { t } = useTranslation("common");
  const [routes] = React.useState([
    { key: "main", title: t("home"), icon: "stats-chart" },
    { key: "favorites", title: t("favorites"), icon: "star" },
    {
      key: "portfolio",
      title: t("portfolio"),
      icon: "briefcase",
    },
    {
      key: "alerts",
      title: t("alerts"),
      icon: "notifications",
    },
    {
      key: "settings",
      title: t("settings"),
      icon: "ellipsis-horizontal",
    },
  ]);

  const renderIcon = (props: {
    route: any;
    focused: boolean;
    color: string;
  }) => <Ionicons size={22} name={props.route.icon} color={props.color} />;

  const renderScene = BottomNavigation.SceneMap({
    main: MainRoute,
    favorites: FavoritesRoute,
    portfolio: PortfolioRoute,
    alerts: AlertsRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
    />
  );
};

export default BottomTabView;
