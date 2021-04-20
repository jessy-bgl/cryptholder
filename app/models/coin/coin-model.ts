import { Instance, types, SnapshotOut } from "mobx-state-tree";
import { CoinImageModel } from "./coin-image-model";
import { CoinMarketModel } from "./coin-market-model";

export const CoinModel = types.model({
  id: types.string,
  symbol: types.string,
  name: types.string,
  image: CoinImageModel,
  market_data: CoinMarketModel,
  last_updated: types.string,
});

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface ICoin extends Instance<typeof CoinModel> {}
export interface ICoinSnapshot extends SnapshotOut<typeof CoinModel> {}
