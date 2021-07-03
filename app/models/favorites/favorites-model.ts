import { Instance, types, SnapshotOut } from "mobx-state-tree";

export const FavoritesModel = types
  .model({
    coins: types.optional(types.array(types.string), []),
  })
  .actions((self) => ({
    addFavorite: (coinID: string) => {
      self.coins.push(coinID);
    },
  }))
  .actions((self) => ({
    removeFavorite: (coinID: string) => {
      self.coins.splice(self.coins.indexOf(coinID), 1);
    },
  }))
  .actions((self) => ({
    toggleFavorite: (coinID: string) => {
      if (self.coins.includes(coinID)) {
        self.removeFavorite(coinID);
      } else {
        self.addFavorite(coinID);
      }
    },
  }));

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface IFavorites extends Instance<typeof FavoritesModel> {}
export interface IFavoritesSnapshot
  extends SnapshotOut<typeof FavoritesModel> {}
