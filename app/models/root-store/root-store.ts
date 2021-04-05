import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree";
import { Coins } from "../coin/coin";

// TODO : must be adapted for async-storage

/**
 * The RootStore model.
 */
const RootStoreModel = types.model({
  //   coins: types.map(Coins),
  coins: types.optional(Coins, {} as any),
});

let initialState = RootStoreModel.create({
  coins: {},
});

export const rootStore = initialState;

// ------------------------------------------------------------------ //
// all the code above corresponds to the recommended way of using
// MST with React : https://mobx-state-tree.js.org/concepts/using-react
// ------------------------------------------------------------------ //

// onSnapshot(rootStore, (snapshot) => {
//   console.log("Snapshot: ", snapshot);
//   localStorage.setItem("rootState", JSON.stringify(snapshot));
// });

/**
 * The RootStore instance.
 */
export type RootInstance = Instance<typeof RootStoreModel>;

/**
 * Create a context we can use to
 * - Provide access to our stores from our root component
 * - Consume stores in our screens (or other components, though it's
 *   preferable to just connect screens)
 */
const RootStoreContext = createContext<RootInstance>({} as RootInstance);

/**
 * The provider our root component will use to expose the root store
 */
export const Provider = RootStoreContext.Provider;

/**
 * A hook that screens can use to gain access to our stores,
 * with `const { someStore, someOtherStore } = useStore()`,
 * or less likely: `const rootStore = useStore()`
 */
export const useStore = () => useContext(RootStoreContext);
/*
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}*/
