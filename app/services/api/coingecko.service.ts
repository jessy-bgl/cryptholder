import { AxiosResponse } from "axios";

import { BaseHttpService } from "../base-http.service";
import * as Types from "../types";

// more info here : https://www.coingecko.com/en/api#explore-api
const API_HOSTNAME: string = "https://api.coingecko.com/";
const API_BASE_PATH: string = "api/v3";

const API_COINS: { path: string; params: object } = {
  path: "coins",
  params: {
    per_page: 50,
    order: "market_cap_desc",
  },
};

/**
 * Manages coins requests.
 */
export class CoingeckoService extends BaseHttpService {
  async getCoins(): Promise<Types.CoinsResult | undefined> {
    try {
      const response: AxiosResponse = await this.get(
        `${API_HOSTNAME}/${API_BASE_PATH}/${API_COINS.path}`,
        { params: API_COINS.params }
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
