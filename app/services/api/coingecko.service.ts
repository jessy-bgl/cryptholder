import { AxiosResponse } from "axios";

import { BaseHttpService } from "../base-http.service";
import * as Types from "../types";

// more info here : https://www.coingecko.com/en/api#explore-api
const API_HOSTNAME: string = "https://api.coingecko.com/";
const API_BASE_PATH: string = "api/v3";

const API_MARKET: { path: string; params: object } = {
  path: "coins/markets",
  params: {
    vs_currency: "usd",
    per_page: 50,
    price_change_percentage: "1h,24h,7d",
  },
};

const API_COINS: { path: string; params: object } = {
  path: "coins",
  params: {
    tickers: false,
    localization: false,
  },
};

/**
 * Manages coins requests.
 */
export class CoingeckoService extends BaseHttpService {
  async getCoinsMarkets(): Promise<Types.MarketResult | undefined> {
    try {
      const response: AxiosResponse = await this.get(
        `${API_HOSTNAME}/${API_BASE_PATH}/${API_MARKET.path}`,
        { params: API_MARKET.params }
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async getCoin(id: string): Promise<Types.CoinResult | undefined> {
    try {
      const response: AxiosResponse = await this.get(
        `${API_HOSTNAME}/${API_BASE_PATH}/${API_COINS.path}/${id}`,
        { params: API_COINS.params }
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
