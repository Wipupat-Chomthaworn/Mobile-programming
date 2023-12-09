import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

export default function SequenceScreen() {
  const opacityVal = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
  const rotateVal = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const rotateX = rotateVal.interpolate({
    inputRange: [0, 0.5, 1],
    // inputRange: [0, 1],
    // outputRange: ["0deg", "360deg"],
    outputRange: ["0deg", "360deg", "0deg"],
  });
  const opacityA = opacityVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });
  console.log("Sequence Tab");
  const Sequence = () => {
    Animated.sequence([
      Animated.timing(opacityVal, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      // Animated.timing(opacityVal, {
      //   toValue: 1,
      //   duration: 500,
      //   useNativeDriver: true,
      // }),
      Animated.timing(rotateVal, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      opacityVal.setValue(0);
      rotateVal.setValue(0);
    });
    console.log("opa..");
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          marginTop: 150,
          width: 180,
          height: 150,
          transform: [{ rotate: rotateX }],
          opacity: opacityA,
        }}
        source={require("./assets/IT_Logo.png")}
        resizeMode={"contain"}
      />
      <View style={styles.Button}>
        <Button title="Run Sequence" onPress={Sequence} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fadingContainer: {
    width: 250,
    height: 50,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  Button: {
    // position:"absolute",
    width: "100%",
  },
});

// export default SequenceScreen;
