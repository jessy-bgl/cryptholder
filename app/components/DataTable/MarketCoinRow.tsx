import React from "react";
import { StyleSheet } from "react-native";
import { View, Image } from "react-native";
import { Text, DataTable, useTheme } from "react-native-paper";

import { ICoin } from "../../models/coin/coin-model";
import {
  numberCurrency,
  numberCurrencyAverage,
  numberPercentage,
} from "../../utils/numbers";

const MarketCoinRow = ({ symbol, image, market_data }: ICoin) => {
  const { colors } = useTheme();

  const renderProfitLossColor = (nb: number | null): string => {
    if (nb === null) return "";
    return nb > 0 ? colors.accent : colors.error;
  };

  return (
    <DataTable.Row>
      <DataTable.Cell>
        <View style={styles.rankView}>
          <Text>{market_data.market_cap_rank}</Text>
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
  rankView: { width: 40 },
  coinName: { marginLeft: 5 },
  numericText: { textAlign: "right" },
  logo: { width: 20, height: 20 },
});

export default MarketCoinRow;
