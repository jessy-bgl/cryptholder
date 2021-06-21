import React from "react";
import { StyleSheet } from "react-native";
import { View, Image } from "react-native";
import { Text, DataTable, useTheme } from "react-native-paper";

import { ICoinMarket } from "../../models/market/coin-market-model";
import {
  numberCurrency,
  numberCurrencyAverage,
  numberPercentage,
} from "../../utils/numbers";

const MarketCoinRow = ({
  symbol,
  image,
  market_cap_rank,
  market_cap,
  market_cap_change_percentage_24h,
  current_price,
  price_change_percentage_24h,
}: ICoinMarket) => {
  const { colors } = useTheme();

  const renderProfitLossColor = (nb: number | null): string => {
    if (nb === null) return "";
    return nb > 0 ? colors.green : colors.red;
  };

  return (
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
              color: renderProfitLossColor(market_cap_change_percentage_24h),
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
  );
};

const styles = StyleSheet.create({
  rankView: { width: 40 },
  coinName: { marginLeft: 5 },
  numericText: { textAlign: "right" },
  logo: { width: 20, height: 20 },
});

export default MarketCoinRow;
