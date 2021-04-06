import { AxiosResponse } from "axios";

import { BaseHttpService } from "./base-http.service";
import * as Types from "./types";

const BASE_URL: string = "https://api.coingecko.com/api/v3";

/**
 * Manages coins requests.
 */
export class CoinsService extends BaseHttpService {
  async getCoinsMarkets(): Promise<Types.CoinMarketResult | undefined> {
    try {
      const response: AxiosResponse = await this.get(
        `${BASE_URL}/coins/markets`,
        { params: { vs_currency: "usd" } }
      );
      return response.data;
    } catch (e) {
      __DEV__ && console.log(e.response.data.error);
    }
  }
}
