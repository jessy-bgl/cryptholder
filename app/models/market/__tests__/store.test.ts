import { MarketModel } from "../market-model";

describe("Market store", () => {
  test("can be created", () => {
    const instance = MarketModel.create({});
    expect(instance).toBeTruthy();
  });
});
