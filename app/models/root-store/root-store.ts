import { types, Instance } from "mobx-state-tree";
import { MarketModel } from "../market/market-model";
import { SettingsModel } from "../settings/settings-model";
import { FavoritesModel } from "../favorites/favorites-model";

/**
 * The RootStore model.
 */
export const RootStoreModel = types.model({
  market: types.optional(MarketModel, {} as any),
  favorites: types.optional(FavoritesModel, {} as any),
  settings: types.optional(SettingsModel, {} as any),
});

/**
 * The RootStore instance. Corresponds to the recommended way of using
 * MST with React : https://mobx-state-tree.js.org/concepts/using-react
 */
export type RootStoreInstance = Instance<typeof RootStoreModel>;
