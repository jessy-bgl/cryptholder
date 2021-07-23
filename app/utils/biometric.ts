import * as LocalAuthentication from "expo-local-authentication";

export const isBioAuthEnrolled = async () => {
  return await LocalAuthentication.isEnrolledAsync();
};

export const isBioAuthCompatible = async () => {
  return await LocalAuthentication.hasHardwareAsync();
};

export const isBioAuthAvailable = async () => {
  const compatible = await isBioAuthCompatible();

  if (!compatible) {
    return false;
  }

  const available = await isBioAuthEnrolled();
  return available;
};

export const cancelBio = async () => {
  await LocalAuthentication.cancelAuthenticate();
};

export const scanBio = async () => {
  let result = await LocalAuthentication.authenticateAsync({
    cancelLabel: "cancel",
    disableDeviceFallback: true,
  });
  return result.success;
};
