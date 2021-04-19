import { CoinModel } from "../coin-model";

describe("Coin model", () => {
  test("can be created", () => {
    const instance = CoinModel.create({
      id: "bitcoin",
      symbol: "btc",
      name: "bitcoin",
      image: { thumb: "", small: "", large: "" },
      market_data: { market_cap_rank: 1 },
      last_updated: "",
    });
    expect(instance).toBeTruthy();
  });
});
