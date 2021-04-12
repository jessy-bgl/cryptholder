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
    { key: "main", title: t("home"), icon: "stats-chart", color: "#222222" },
    { key: "favorites", title: t("favorites"), icon: "star", color: "#222222" },
    {
      key: "portfolio",
      title: t("portfolio"),
      icon: "briefcase",
      color: "#222222",
    },
    {
      key: "alerts",
      title: t("alerts"),
      icon: "notifications",
      color: "#222222",
    },
    {
      key: "settings",
      title: t("settings"),
      icon: "ellipsis-horizontal",
      color: "#222222",
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
