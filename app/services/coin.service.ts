import * as Types from "./types";
import { CoingeckoService } from "./api/coingecko.service";

/**
 * Manages coin requests.
 */
export class CoinService {
  async getCoins(): Promise<Types.CoinsResult | undefined> {
    try {
      const coingeckoService = new CoingeckoService();
      const coinsData = await coingeckoService.getCoins();
      return coinsData;
    } catch (e) {
      __DEV__ && console.log(e.response.data.error);
    }
  }
}
