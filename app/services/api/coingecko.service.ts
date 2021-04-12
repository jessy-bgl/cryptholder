import { AxiosResponse } from "axios";

import { BaseHttpService } from "../base-http.service";
import * as Types from "../types";

// more info here : https://www.coingecko.com/en/api#explore-api
const API_HOSTNAME: string = "https://api.coingecko.com/";
const API_BASE_PATH: string = "api/v3";
const API_COINSMARKET_PATH: string = "coins/markets";
const API_PARAMS: object = {
  vs_currency: "usd",
  per_page: 250,
  price_change_percentage: "1h,24h,7d",
};

/**
 * Manages market requests.
 */
export class CoingeckoService extends BaseHttpService {
  async getCoinsMarkets(): Promise<Types.CoinMarketResult | undefined> {
    try {
      const response: AxiosResponse = await this.get(
        `${API_HOSTNAME}/${API_BASE_PATH}/${API_COINSMARKET_PATH}`,
        { params: API_PARAMS }
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
