import { Instance, types, SnapshotOut } from "mobx-state-tree";
import { CoinService } from "../../services/coin.service";
import { CoinMarketModel, ICoinMarketSnapshot } from "./coin-market-model";

export const MarketModel = types
  .model({
    coins: types.optional(types.array(CoinMarketModel), []),
  })
  .actions((self) => ({
    saveCoinsMarketsData(newMarketData: ICoinMarketSnapshot[]) {
      self.coins.replace(newMarketData);
    },
  }))
  .actions((self) => ({
    reloadCoinsMarketsData: async () => {
      const coinService = new CoinService();
      const result = await coinService.getCoinsMarkets();
      if (result) self.saveCoinsMarketsData(result);
    },
  }));

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface IMarket extends Instance<typeof MarketModel> {}
export interface IMarketSnapshot extends SnapshotOut<typeof MarketModel> {}
