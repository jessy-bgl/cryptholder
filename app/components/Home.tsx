import React, { useState, useEffect, useMemo } from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { Divider, useTheme } from "react-native-paper";

import { useStore } from "../models/root-store/root-store-context";
import {
  numberCurrency,
  numberCurrencyAverage,
  numberPercentage,
} from "../utils/numbers";

const Main = () => {
  const { market } = useStore();
  const { coins } = market;
  const { navigate } = useNavigation();
  const { t } = useTranslation("market");
  const { colors } = useTheme();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [loadingMarketData, setLoadingMarketData] = useState(false);

  useEffect(() => {
    async function fetchCoinsMarketsData() {
      setLoadingMarketData(true);
      await market.reloadCoinsMarketsData();
      setLoadingMarketData(false);
    }
    fetchCoinsMarketsData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setLoadingMarketData(true);
    market.reloadCoinsMarketsData().then(() => setLoadingMarketData(false));
  }, []);

  const renderProfitLossColor = (nb: number | null): string => {
    if (nb === null) return "";
    return nb > 0 ? colors.green : colors.red;
  };

  const renderItem = ({ item, index }: any) => {
    return (
      <>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigate("coin", { symbol: item.symbol });
          }}
        >
          <View style={{ ...styles.firstColumn }}>
            <Text style={styles.text}>{`${index + 1}`}</Text>
            <Image style={styles.logo} source={{ uri: item.image }} />
            <Text style={styles.text}>{`${item.symbol.toUpperCase()}`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              {numberCurrencyAverage(item.market_cap)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                ...styles.text,
                color: renderProfitLossColor(
                  item.market_cap_change_percentage_24h
                ),
              }}
            >
              {numberPercentage(item.market_cap_change_percentage_24h / 100)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              {numberCurrency(item.current_price)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={{
                ...styles.text,
                color: renderProfitLossColor(item.price_change_percentage_24h),
              }}
            >
              {numberPercentage(item.price_change_percentage_24h / 100)}
            </Text>
          </View>
        </TouchableOpacity>
        <Divider />
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{t("name")}</Text>
        <Text style={styles.title}>{t("cap_24h")}</Text>
        <Text style={styles.title}>{t("price")}</Text>
      </View>
      <Divider />
      <FlatList
        renderItem={renderItem}
        data={coins}
        onRefresh={onRefresh}
        refreshing={loadingMarketData}
      ></FlatList>
    </>
  );
};

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
    },
    firstColumn: {
      display: "flex",
      flexDirection: "row",
      flex: 2,
      paddingLeft: 10,
    },

    row: { flex: 1, alignSelf: "center" },

    text: { color: theme.colors.text, alignSelf: "center" },
    title: { color: theme.colors.primaryText, paddingLeft: 10, flex: 1 },
    logo: { width: 20, height: 20, margin: 10 },
  });
};

export default observer(Main);
