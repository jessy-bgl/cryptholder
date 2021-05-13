import * as Types from "./types";
import { CoingeckoService } from "./api/coingecko.service";

/**
 * Manages coin requests.
 */
export class CoinService {
  async getCoinsMarkets(): Promise<Types.MarketResult | undefined> {
    try {
      const coingeckoService = new CoingeckoService();
      const coinsMarketData = await coingeckoService.getCoinsMarkets();
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
