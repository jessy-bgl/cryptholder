import { onSnapshot } from "mobx-state-tree";

import { RootStoreModel, RootStoreInstance } from "./root-store";
import * as storage from "../../utils/storage";

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = "root";

/**
 * Setup the root state
 */
export const setupRootStore = async () => {
  let rootStore: RootStoreInstance;
  let data: typeof RootStoreModel;

  try {
    // load data from storage
    data = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {};
    rootStore = RootStoreModel.create(data);
  } catch (e) {
    // if there's any problems loading, then let's at least fallback to
    // an empty state instead of crashing.
    rootStore = RootStoreModel.create({
      market: { coins: [] },
      settings: { darkMode: false },
    });

    __DEV__ && console.error(e.message, null);
  }

  // track changes & save to storage
  onSnapshot(rootStore, (snapshot) =>
    storage.save(ROOT_STATE_STORAGE_KEY, snapshot)
  );

  return rootStore;
};
