import { types, Instance } from "mobx-state-tree";
import { CoinsModel } from "../coins/coins-model";
import { SettingsModel } from "../settings/settings-model";

/**
 * The RootStore model.
 */
export const RootStoreModel = types.model({
  coins: types.optional(CoinsModel, {} as any),
  settings: types.optional(SettingsModel, {} as any),
});

/**
 * The RootStore instance. Corresponds to the recommended way of using
 * MST with React : https://mobx-state-tree.js.org/concepts/using-react
 */
export type RootStoreInstance = Instance<typeof RootStoreModel>;
