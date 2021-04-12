import { Instance, types, SnapshotOut } from "mobx-state-tree";
import { CoinsService } from "../../services/coins.service";
import { Coin, ICoinSnapshot } from "./coin";

export const Coins = types
  .model({ marketData: types.optional(types.array(Coin), []) })
  .actions((self) => ({
    saveMarketData(newMarketData: ICoinSnapshot[]) {
      self.marketData.replace(newMarketData);
    },
  }))
  .actions((self) => ({
    getMarketData: async () => {
      const coinService = new CoinsService();
      const result = await coinService.getCoinsMarkets();
      if (result) self.saveMarketData(result);
    },
  }));

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface ICoins extends Instance<typeof Coins> {}
export interface ICoinsSnapshot extends SnapshotOut<typeof Coins> {}
