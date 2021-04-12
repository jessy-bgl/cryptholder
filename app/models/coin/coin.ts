import { Instance, types, SnapshotOut } from "mobx-state-tree";

export const Coin = types.model({
  id: types.string,
  symbol: types.string,
  name: types.string,
  image: types.string,
  current_price: types.number,
  market_cap: types.number,
  market_cap_rank: types.integer,
  fully_diluted_valuation: types.number,
  total_volume: types.number,
  high_24h: types.number,
  low_24h: types.number,
  price_change_24h: types.number,
  price_change_percentage_24h: types.number,
  market_cap_change_24h: types.number,
  market_cap_change_percentage_24h: types.number,
  circulating_supply: types.number,
  total_supply: types.number,
  max_supply: types.number,
  ath: types.number,
  ath_change_percentage: types.number,
  ath_date: types.string,
  atl: types.number,
  atl_change_percentage: types.number,
  atl_date: types.string,
  last_updated: types.string,
});

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface ICoin extends Instance<typeof Coin> {}
export interface ICoinSnapshot extends SnapshotOut<typeof Coin> {}
