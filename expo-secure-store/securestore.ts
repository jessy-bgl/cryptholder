import * as SecureStore from "expo-secure-store";

export type SecureStoreKey = "passcode";

export async function save(key: SecureStoreKey, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function remove(key: SecureStoreKey) {
  await SecureStore.deleteItemAsync(key);
}

export async function getValueFor(key: SecureStoreKey) {
  let result = await SecureStore.getItemAsync(key);
  return result || undefined;
}
