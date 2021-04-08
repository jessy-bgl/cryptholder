import { types, Instance } from "mobx-state-tree";
import { Coins } from "../coin/coin-store";

/**
 * The RootStore model.
 */
export const RootStoreModel = types.model({
  coins: types.optional(Coins, {} as any),
});

/**
 * The RootStore instance. Corresponds to the recommended way of using
 * MST with React : https://mobx-state-tree.js.org/concepts/using-react
 */
export type RootStoreInstance = Instance<typeof RootStoreModel>;
