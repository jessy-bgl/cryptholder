import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import {
  Text,
  DataTable,
  useTheme,
  TouchableRipple,
  Menu,
} from "react-native-paper";

import { ICoinMarkets } from "../../models/coin/coin-markets-model";
import {
  numberCurrency,
  numberCurrencyAverage,
  numberPercentage,
} from "../../utils/numbers";
import { useStore } from "../../models/root-store/root-store-context";

interface CoinMenu {
  visible: boolean;
  options: [React.ReactNode?];
}

const MarketCoinRow = ({
  id,
  symbol,
  image,
  market_cap_rank,
  market_cap,
  market_cap_change_percentage_24h,
  current_price,
  price_change_percentage_24h,
}: ICoinMarkets) => {
  const { colors } = useTheme();
  const { coins } = useStore();
  const { t } = useTranslation("favorites");

  const [coinMenu, setCoinMenu] = useState<CoinMenu>({
    visible: false,
    options: [],
  });

  const closeCoinMenu = () => setCoinMenu({ visible: false, options: [] });

  const renderProfitLossColor = (nb: number | null): string => {
    if (nb === null) return "";
    return nb > 0 ? colors.green : colors.red;
  };

  const createMenuOptionsFromId = () => {
    // init coin menu options
    const menuOptions: [React.ReactNode?] = [];
    // set favorites option
    if (coins.favorites.includes(id))
      menuOptions.push(
        <Menu.Item
          key="remove"
          onPress={() => {
            coins.removeFavorite(id);
            closeCoinMenu();
          }}
          title={t("removeFromFavorites")}
        />
      );
    else
      menuOptions.push(
        <Menu.Item
          key="add"
          onPress={() => {
            coins.addFavorite(id);
            closeCoinMenu();
          }}
          title={t("addToFavorites")}
        />
      );
    return menuOptions;
  };

  const handleLongClick = () => {
    const menuOptions = createMenuOptionsFromId();
    setCoinMenu({ visible: true, options: menuOptions });
  };

  return (
    <Menu
      visible={coinMenu.visible}
      onDismiss={closeCoinMenu}
      style={styles.menu}
      anchor={
        <TouchableRipple onPress={() => {}} onLongPress={handleLongClick}>
          <DataTable.Row>
            <DataTable.Cell>
              <View style={styles.rankView}>
                <Text>{market_cap_rank}</Text>
              </View>
              <View>
                <Image style={styles.logo} source={{ uri: image }} />
              </View>
              <View>
                <Text style={styles.coinName}>{`${symbol.toUpperCase()}`}</Text>
              </View>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <View>
                <Text style={styles.numericText}>
                  {market_cap !== null ? numberCurrencyAverage(market_cap) : ""}
                </Text>
                <Text
                  style={{
                    color: renderProfitLossColor(
                      market_cap_change_percentage_24h
                    ),
                    ...styles.numericText,
                  }}
                >
                  {market_cap_change_percentage_24h !== null
                    ? numberPercentage(market_cap_change_percentage_24h / 100)
                    : ""}
                </Text>
              </View>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <View>
                <Text style={styles.numericText}>
                  {current_price !== null ? numberCurrency(current_price) : ""}
                </Text>
                <Text
                  style={{
                    color: renderProfitLossColor(price_change_percentage_24h),
                    ...styles.numericText,
                  }}
                >
                  {price_change_percentage_24h !== null
                    ? numberPercentage(price_change_percentage_24h / 100)
                    : ""}
                </Text>
              </View>
            </DataTable.Cell>
          </DataTable.Row>
        </TouchableRipple>
      }
    >
      {coinMenu.options}
    </Menu>
  );
};

const styles = StyleSheet.create({
  rankView: { width: 40 },
  coinName: { marginLeft: 5 },
  numericText: { textAlign: "right" },
  logo: { width: 20, height: 20 },
  menu: { left: "auto", right: 0 },
});

export default observer(MarketCoinRow);
