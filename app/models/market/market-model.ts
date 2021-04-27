import { Instance, types, SnapshotOut } from "mobx-state-tree";
import { CoinService } from "../../services/coin.service";
import { CoinModel, ICoinSnapshot } from "../coin/coin-model";

export const MarketModel = types
  .model({
    coins: types.optional(types.array(CoinModel), []),
  })
  .actions((self) => ({
    saveCoinsData: async (newCoinsData: ICoinSnapshot[]) => {
      self.coins.replace(newCoinsData);
    },
  }))
  .actions((self) => ({
    reloadCoinsData: async () => {
      const coinService = new CoinService();
      const result = await coinService.getCoins();
      if (result) await self.saveCoinsData(result);
    },
  }));

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface IMarket extends Instance<typeof MarketModel> {}
export interface IMarketSnapshot extends SnapshotOut<typeof MarketModel> {}
