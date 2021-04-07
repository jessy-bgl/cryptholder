import { Coins } from "../coin-store";

describe("Coin store", () => {
  test("can be created", () => {
    const instance = Coins.create({});
    expect(instance).toBeTruthy();
  });
});
