import { Instance, types, SnapshotOut } from "mobx-state-tree";
import { MarketService } from "../../services/market.service";
import { CoinModel, ICoinSnapshot } from "./coin-model";

export const MarketModel = types
  .model({
    coins: types.optional(types.array(CoinModel), []),
  })
  .actions((self) => ({
    saveCoinsMarketData(newCoinsMarketData: ICoinSnapshot[]) {
      self.coins.replace(newCoinsMarketData);
    },
  }))
  .actions((self) => ({
    reloadCoinsMarketData: async () => {
      const marketService = new MarketService();
      const result = await marketService.getCoinsMarket();
      if (result) self.saveCoinsMarketData(result);
    },
  }));

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface IMarket extends Instance<typeof MarketModel> {}
export interface IMarketSnapshot extends SnapshotOut<typeof MarketModel> {}
