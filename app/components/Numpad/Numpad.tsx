import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Animated,
} from "react-native";
import { Button, useTheme } from "react-native-paper";

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
            toValue: -2,
            duration: 50,
            useNativeDriver: true,
          }),
          // shift element to the right by 2 units
          Animated.timing(anim.current, {
            toValue: 2,
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
        { iterations: 2 }
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
            <Button
              style={styles.button}
              onPress={handleDelete}
              labelStyle={styles.labelStyle}
            >
              Delete
            </Button>
            <NumpadButton text={"0"} onPress={handleOnPress} />
            <Button
              style={styles.button}
              onPress={handleReset}
              labelStyle={styles.labelStyle}
            >
              Reset
            </Button>
          </View>
        </View>
      </View>
    );
  }
);

const createStyles = (theme: ReactNativePaper.Theme) => {
  const screenHeight = Dimensions.get("screen").height;
  const windowHeight = Dimensions.get("window").height;
  const navbarHeight =
    screenHeight - windowHeight + (StatusBar.currentHeight || 0);

  return StyleSheet.create({
    root: {
      height: "100%",
      display: "flex",
    },
    container: {
      position: "absolute",
      width: "100%",
      bottom: navbarHeight + 80,
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
      marginTop: 20,
    },
    labelStyle: {
      marginTop: 15,
      color: theme.colors.text,
      justifyContent: "flex-start",
    },
  });
};

export default Numpad;
