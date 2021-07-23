import React, { useRef } from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation } from "@react-navigation/native";

import { save } from "../../expo-secure-store/securestore";
import Numpad, { NumpadRef } from "../components/Numpad/Numpad";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";
import { useStore } from "../models/root-store/root-store-context";

type AuthScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "numpad"
>;
type AuthScreenRouteProp = RouteProp<RootStackParamList, "numpad">;
type Props = {
  route: AuthScreenRouteProp;
  navigation: AuthScreenNavigationProp;
};

const NumpadScreen = ({ route, navigation }: Props) => {
  const { navigate } = useNavigation();
  const { t } = useTranslation("common");
  const { settings } = useStore();
  const numpadRef = useRef<NumpadRef>({ shake: () => {}, refresh: () => {} });

  // change title depending on creation or verification
  // if code is present in route params, it's a verification
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.code ? t("verifyCode") : t("createCode"),
    });
  }, [navigation, route]);

  // disable passcode if going back before validation
  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", () => {
        settings.togglePasscode();
      }),
    [navigation]
  );

  const onPasscodeCreationSuccess = (code: string) => {
    navigate("numpad", { title: "Verify passcode", code: code });
  };

  const onPasscodeVerifySuccess = async (code: string) => {
    if (route.params && code === route.params.code) {
      // passcode is equal, save it
      await save("passcode", code);
      navigate("settings");
    } else {
      numpadRef.current.shake();
      numpadRef.current.refresh();
    }
  };

  // refresh numpad code when state of numpad screen change
  // this can happen when we navigate from create to verify
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      numpadRef.current.refresh();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Numpad
        onSuccess={
          route.params?.code
            ? onPasscodeVerifySuccess
            : onPasscodeCreationSuccess
        }
        ref={numpadRef}
      />
    </View>
  );
};

export default NumpadScreen;
