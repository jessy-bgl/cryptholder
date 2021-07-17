import { Instance, types, SnapshotOut } from "mobx-state-tree";
import { CoinService } from "../../services/coin.service";
import {
  CoinMarketsModel,
  ICoinMarketsSnapshot,
} from "../coin/coin-markets-model";

export const CoinsModel = types
  .model({
    market: types.optional(types.array(CoinMarketsModel), []),
    favorites: types.optional(types.array(types.string), []),
  })
  .actions((self) => ({
    addCoinMarketData: (newCoinMarketData: ICoinMarketsSnapshot) => {
      self.market.push(newCoinMarketData);
    },
  }))
  .actions((self) => ({
    setMarketData: (newMarketData: ICoinMarketsSnapshot[]) => {
      self.market.replace(newMarketData);
    },
  }))
  .actions((self) => ({
    reloadCoinsMarketsData: async () => {
      // init coin service
      const coinService = new CoinService();
      // fetch coins markets data
      const coinsMarketData = await coinService.getCoinsMarkets();
      // set favorite coins to fetch
      const favoritesCoinsToFetch = coinsMarketData
        ? self.favorites
            .filter(
              (favCoin) =>
                coinsMarketData.findIndex((coin) => coin.id === favCoin) === -1
            )
            .join()
        : self.favorites.join();
      // fetch favorites coins market data
      const favoritesCoinsMarketData = favoritesCoinsToFetch.length
        ? await coinService.getCoinsMarkets({
            ids: favoritesCoinsToFetch,
          })
        : [];
      // init new market data
      let newMarketData: ICoinMarketsSnapshot[] = [];
      // add coins market data to new market data
      if (coinsMarketData)
        newMarketData = newMarketData.concat(coinsMarketData);
      // add favorites coins market data to new market data
      if (favoritesCoinsMarketData)
        newMarketData = newMarketData.concat(favoritesCoinsMarketData);
      // replace current market data by new market data
      self.setMarketData(newMarketData);
    },
  }))
  .actions((self) => ({
    addFavorite: async (coinID: string) => {
      // add the coin to favorites
      self.favorites.push(coinID);
      // fetch coin market data
      const coinService = new CoinService();
      const coinMarketData = await coinService.getCoinsMarkets({
        ids: coinID,
      });
      // add data to 'market'
      if (
        coinMarketData &&
        coinMarketData.length &&
        self.market.findIndex((coin) => coin.id === coinID) === -1
      )
        self.addCoinMarketData(coinMarketData[0]);
    },
  }))
  .actions((self) => ({
    removeFavorite: (coinID: string) => {
      self.favorites.splice(self.favorites.indexOf(coinID), 1);
    },
  }));

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface ICoins extends Instance<typeof CoinsModel> {}
export interface ICoinsSnapshot extends SnapshotOut<typeof CoinsModel> {}
