import * as Types from "./types";
import { CoingeckoService } from "./api/coingecko.service";

/**
 * Manages market requests.
 */
export class MarketService {
  async getCoinsMarket(): Promise<Types.CoinMarketResult | undefined> {
    try {
      const coingeckoService = new CoingeckoService();
      const coinsMarketData = await coingeckoService.getCoinsMarkets();
      return coinsMarketData;
    } catch (e) {
      __DEV__ && console.log(e.response.data.error);
    }
  }
}
