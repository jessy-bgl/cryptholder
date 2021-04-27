import React from "react";
import { StyleSheet } from "react-native";
import { View, Image } from "react-native";
import { Text, DataTable, useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";

import { ICoin } from "../../models/coin/coin-model";
import {
  numberCurrency,
  numberCurrencyAverage,
  numberPercentage,
} from "../../utils/numbers";
import { useStore } from "../../models/root-store/root-store-context";

const MarketCoinRow = ({ symbol, image, market_data }: ICoin) => {
  const { colors } = useTheme();
  const { settings } = useStore();

  const renderProfitLossColor = (nb: number | null): string => {
    if (nb === null) return "";
    return nb > 0 ? colors.accent : colors.error;
  };

  const renderStarIcon = (symbol: string) => {
    const iconName = settings.favorites.includes(symbol)
      ? "star"
      : "star-outline";
    return iconName;
  };

  return (
    <DataTable.Row onPress={() => settings.toggleFavorite(symbol)}>
      <DataTable.Cell>
        <View style={styles.rankView}>
          <Text>{market_data.market_cap_rank}</Text>
        </View>
        <View style={styles.small}>
          <Ionicons
            style={styles.logo}
            name={renderStarIcon(symbol)}
            size={16}
            color={colors.text}
          />
        </View>
        <View>
          <Image style={styles.logo} source={{ uri: image.thumb }} />
        </View>
        <View>
          <Text style={styles.coinName}>{`${symbol.toUpperCase()}`}</Text>
        </View>
      </DataTable.Cell>
      <DataTable.Cell numeric>
        <View>
          <Text style={styles.numericText}>
            {market_data.market_cap["usd"] !== null
              ? numberCurrencyAverage(market_data.market_cap["usd"])
              : ""}
          </Text>
          <Text
            style={{
              color: renderProfitLossColor(
                market_data.market_cap_change_percentage_24h_in_currency["usd"]
              ),
              ...styles.numericText,
            }}
          >
            {market_data.market_cap_change_percentage_24h_in_currency["usd"] !==
            null
              ? numberPercentage(
                  market_data.market_cap_change_percentage_24h_in_currency[
                    "usd"
                  ] / 100
                )
              : ""}
          </Text>
        </View>
      </DataTable.Cell>
      <DataTable.Cell numeric>
        <View>
          <Text style={styles.numericText}>
            {market_data.current_price["usd"] !== null
              ? numberCurrency(market_data.current_price["usd"])
              : ""}
          </Text>
          <Text
            style={{
              color: renderProfitLossColor(
                market_data.price_change_percentage_24h_in_currency["usd"]
              ),
              ...styles.numericText,
            }}
          >
            {market_data.price_change_percentage_24h_in_currency["usd"] !== null
              ? numberPercentage(
                  market_data.price_change_percentage_24h_in_currency["usd"] /
                    100
                )
              : ""}
          </Text>
        </View>
      </DataTable.Cell>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  rankView: { width: 25, textAlign: "left" },
  coinName: { marginLeft: 5 },
  numericText: { textAlign: "right" },
  logo: { width: 20, height: 20 },
  star: { marginRight: 5, textAlignVertical: "center" },
  small: { width: 50, borderColor: "red", borderWidth: 0, textAlign: "center" },
});

export default observer(MarketCoinRow);
