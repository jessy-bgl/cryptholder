import { Instance, types, SnapshotOut } from "mobx-state-tree";

export const CoinMarketModel = types.model({
  id: types.string,
  symbol: types.string,
  name: types.maybeNull(types.string),
  image: types.maybe(types.string),
  current_price: types.number,
  market_cap: types.number,
  market_cap_rank: types.integer,
  total_volume: types.maybeNull(types.number),
  price_change_24h: types.number,
  price_change_percentage_24h: types.number,
  market_cap_change_24h: types.number,
  market_cap_change_percentage_24h: types.number,
  circulating_supply: types.maybeNull(types.number),
  total_supply: types.maybeNull(types.number),
  max_supply: types.maybeNull(types.number),
  ath: types.maybeNull(types.number),
  ath_change_percentage: types.maybeNull(types.number),
  ath_date: types.maybeNull(types.string),
  last_updated: types.maybeNull(types.string),
});

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface ICoinMarket extends Instance<typeof CoinMarketModel> {}
export interface ICoinMarketSnapshot
  extends SnapshotOut<typeof CoinMarketModel> {}
