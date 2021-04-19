import { Instance, types, SnapshotOut } from "mobx-state-tree";

export const CoinImageModel = types.model({
  thumb: types.string,
  small: types.string,
  large: types.string,
});

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface ICoinImage extends Instance<typeof CoinImageModel> {}
export interface ICoinImageSnapshot
  extends SnapshotOut<typeof CoinImageModel> {}
