import { MarketModel } from "../coins-model";

describe("Market model", () => {
  test("can be created", () => {
    const instance = MarketModel.create({});
    expect(instance).toBeTruthy();
  });
});
