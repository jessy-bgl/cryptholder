import { createContext, useContext } from "react";
import { RootStoreInstance } from "./root-store";

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
