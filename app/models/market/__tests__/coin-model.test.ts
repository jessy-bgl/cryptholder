import { CoinModel } from "../coin-model";

describe("Coin model", () => {
  test("can be created", () => {
    const instance = CoinModel.create({
      id: "bitcoin",
    });
    expect(instance).toBeTruthy();
  });
});
