import { types, Instance } from "mobx-state-tree";
import { MarketModel } from "../market/store";

/**
 * The RootStore model.
 */
export const RootStoreModel = types.model({
  market: types.optional(MarketModel, {} as any),
});

/**
 * The RootStore instance. Corresponds to the recommended way of using
 * MST with React : https://mobx-state-tree.js.org/concepts/using-react
 */
export type RootStoreInstance = Instance<typeof RootStoreModel>;