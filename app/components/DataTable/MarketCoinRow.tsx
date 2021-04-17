import React from "react";
import { StyleSheet } from "react-native";
import { View, Image } from "react-native";
import { Text, DataTable, useTheme } from "react-native-paper";

import { ICoin } from "../../models/market/coin-model";
import {
  numberCurrency,
  numberCurrencyAverage,
  numberPercentage,
} from "../../utils/numbers";

const MarketCoinRow = ({
  market_cap_rank,
  image,
  symbol,
  market_cap,
  market_cap_change_percentage_24h,
  current_price,
  price_change_percentage_24h,
}: ICoin) => {
  const { colors } = useTheme();

  const renderProfitLossColor = (nb: number): string =>
    nb > 0 ? colors.accent : colors.error;

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
            {numberCurrencyAverage(market_cap)}
          </Text>
          <Text
            style={{
              color: renderProfitLossColor(market_cap_change_percentage_24h),
              ...styles.numericText,
            }}
          >
            {numberPercentage(market_cap_change_percentage_24h / 100)}
          </Text>
        </View>
      </DataTable.Cell>
      <DataTable.Cell numeric>
        <View>
          <Text style={styles.numericText}>
            {numberCurrency(current_price)}
          </Text>
          <Text
            style={{
              color: renderProfitLossColor(price_change_percentage_24h),
              ...styles.numericText,
            }}
          >
            {numberPercentage(price_change_percentage_24h / 100)}
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
