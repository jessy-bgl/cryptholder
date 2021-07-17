import * as Types from "./types";
import { CoingeckoService, ICoinsMarketsParams } from "./api/coingecko.service";

/**
 * Manages coin requests.
 */
export class CoinService {
  async getCoinsMarkets(
    params?: ICoinsMarketsParams
  ): Promise<Types.MarketResult | undefined> {
    try {
      const coingeckoService = new CoingeckoService();
      const coinsMarketData = await coingeckoService.getCoinsMarkets(params);
      return coinsMarketData;
    } catch (e) {
      __DEV__ && console.log(e.response.data.error);
    }
  }

  async getCoin(id: string): Promise<Types.CoinResult | undefined> {
    try {
      const coingeckoService = new CoingeckoService();
      const coinsData = await coingeckoService.getCoin(id);
      return coinsData;
    } catch (e) {
      __DEV__ && console.log(e.response.data.error);
    }
  }
}
