import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Animated,
  Text,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "react-native-paper";
import ItemIonicon from "../Icon/ItemIonicon";

import NumpadButton from "./NumpadButton";
import NumpadDisplayHelper from "./NumpadDisplayHelper";

type NumpadProps = {
  onSuccess: (code: string) => void;
  codeLength?: number;
};

export type NumpadRef = {
  shake: () => void;
  refresh: () => void;
};

const Numpad = forwardRef(
  ({ onSuccess, codeLength = 4 }: NumpadProps, ref: React.Ref<NumpadRef>) => {
    const { t } = useTranslation("common");
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const [code, setCode] = useState("");

    useImperativeHandle(ref, () => ({
      shake() {
        shake();
      },
      refresh() {
        setCode("");
      },
    }));

    const handleOnPress = (value: string) => {
      const newCode = code + value;
      setCode(newCode);

      if (newCode.length >= codeLength) {
        // small timeout to let user see the last input
        setTimeout(() => onSuccess(newCode), 100);
      }
    };

    const handleDelete = () => {
      const newCode = code.slice(0, -1);
      setCode(newCode);
    };

    const handleReset = () => {
      setCode("");
    };

    const anim = useRef(new Animated.Value(0));

    const shake = useCallback(() => {
      // makes the sequence loop
      Animated.loop(
        // runs the animation array in sequence
        Animated.sequence([
          // shift element to the left by 2 units
          Animated.timing(anim.current, {
            toValue: -4,
            duration: 50,
            useNativeDriver: true,
          }),
          // shift element to the right by 2 units
          Animated.timing(anim.current, {
            toValue: 4,
            duration: 50,
            useNativeDriver: true,
          }),
          // bring the element back to its original position
          Animated.timing(anim.current, {
            toValue: 0,
            duration: 50,
            useNativeDriver: true,
          }),
        ]),
        // loops the above animation config 2 times
        { iterations: 3 }
      ).start();
    }, []);

    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Animated.View
            style={{ transform: [{ translateX: anim.current }], ...styles.row }}
          >
            <NumpadDisplayHelper active={code.length} size={codeLength} />
          </Animated.View>
          <View style={styles.row}>
            <NumpadButton text={"1"} onPress={handleOnPress} />
            <NumpadButton text={"2"} onPress={handleOnPress} />
            <NumpadButton text={"3"} onPress={handleOnPress} />
          </View>
          <View style={styles.row}>
            <NumpadButton text={"4"} onPress={handleOnPress} />
            <NumpadButton text={"5"} onPress={handleOnPress} />
            <NumpadButton text={"6"} onPress={handleOnPress} />
          </View>
          <View style={styles.row}>
            <NumpadButton text={"7"} onPress={handleOnPress} />
            <NumpadButton text={"8"} onPress={handleOnPress} />
            <NumpadButton text={"9"} onPress={handleOnPress} />
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={handleDelete}>
              <ItemIonicon
                name={"close"}
                size={30}
                color={theme.colors.secondaryText}
              />
            </TouchableOpacity>
            <NumpadButton text={"0"} onPress={handleOnPress} />
            <TouchableOpacity style={styles.button} onPress={handleReset}>
              <ItemIonicon
                name={"refresh"}
                size={30}
                color={theme.colors.secondaryText}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
);

const createStyles = (theme: ReactNativePaper.Theme) => {
  return StyleSheet.create({
    root: {
      height: "100%",
      display: "flex",
    },
    container: {
      position: "absolute",
      width: "100%",
      bottom: 10,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
    },
    button: {
      width: 120,
      height: 50,
      marginTop: 28,
    },
    labelStyle: {
      marginTop: 15,
      fontSize: 16,
      color: theme.colors.secondaryText,
      alignSelf: "center",
    },
  });
};

export default Numpad;
