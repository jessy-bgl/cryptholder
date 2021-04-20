import { Instance, types, SnapshotOut } from "mobx-state-tree";
import { CoinCurrenciesResult } from "./coin-currencies-result";

export const CoinMarketModel = types.model({
  current_price: types.optional(CoinCurrenciesResult, {}),
  market_cap: types.optional(CoinCurrenciesResult, {}),
  market_cap_rank: types.integer,
  total_volume: types.optional(CoinCurrenciesResult, {}),
  price_change_24h_in_currency: types.optional(CoinCurrenciesResult, {}),
  price_change_percentage_24h_in_currency: types.optional(
    CoinCurrenciesResult,
    {}
  ),
  price_change_percentage_1h_in_currency: types.optional(
    CoinCurrenciesResult,
    {}
  ),
  price_change_percentage_7d_in_currency: types.optional(
    CoinCurrenciesResult,
    {}
  ),
  price_change_percentage_14d_in_currency: types.optional(
    CoinCurrenciesResult,
    {}
  ),
  price_change_percentage_30d_in_currency: types.optional(
    CoinCurrenciesResult,
    {}
  ),
  price_change_percentage_60d_in_currency: types.optional(
    CoinCurrenciesResult,
    {}
  ),
  price_change_percentage_200d_in_currency: types.optional(
    CoinCurrenciesResult,
    {}
  ),
  price_change_percentage_1y_in_currency: types.optional(
    CoinCurrenciesResult,
    {}
  ),
  market_cap_change_24h_in_currency: types.optional(CoinCurrenciesResult, {}),
  market_cap_change_percentage_24h_in_currency: types.optional(
    CoinCurrenciesResult,
    {}
  ),
  circulating_supply: types.maybeNull(types.string),
  total_supply: types.maybeNull(types.string),
});

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface ICoinMarket extends Instance<typeof CoinMarketModel> {}
export interface ICoinMarketSnapshot
  extends SnapshotOut<typeof CoinMarketModel> {}
