import { Coin } from "../coin";

describe("Coin model", () => {
  test("can be created", () => {
    const instance = Coin.create({
      id: "bitcoin",
    });
    expect(instance).toBeTruthy();
  });
});
