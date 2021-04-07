import { useContext, createContext } from "react";
import { types, Instance } from "mobx-state-tree";
import { Coins } from "../coin/coin-store";

// TODO : must be adapted for async-storage

/**
 * The RootStore model.
 */
const RootStoreModel = types.model({
  coins: types.optional(Coins, {} as any),
});

// ------------------------------------------------------------------ //
// all the code above corresponds to the recommended way of using
// MST with React : https://mobx-state-tree.js.org/concepts/using-react
// ------------------------------------------------------------------ //

/**
 * The RootStore instance.
 */
export type RootStoreInstance = Instance<typeof RootStoreModel>;

/**
 * Create a context we can use to
 * - Provide access to our stores from our root component
 * - Consume stores in our screens (or other components, though it's
 *   preferable to just connect screens)
 */
const RootStoreContext = createContext<RootStoreInstance>(
  {} as RootStoreInstance
);

/**
 * The provider our root component will use to expose the root store
 */
export const RootStoreProvider = RootStoreContext.Provider;

/**
 * A hook that screens can use to gain access to our stores,
 * with `const { someStore, someOtherStore } = useStore()`,
 * or less likely: `const rootStore = useStore()`
 */
export const useStore = () => useContext(RootStoreContext);

/**
 * Setup the root state
 */
export const setupRootStore = async () => {
  let rootStore: RootStoreInstance;

  rootStore = RootStoreModel.create({
    coins: {},
  });

  return rootStore;
};
