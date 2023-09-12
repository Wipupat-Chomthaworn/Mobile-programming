import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

export default function SpringScreen() {
  const animV1 = useRef(new Animated.Value(0.2)).current; // Initial value for opacity: 0
  // const animVal = useRef(new Animated.Value(0)).current;
  const animVal = useRef(new Animated.Value(0)).current;

  // const spin = animVal.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0deg", "360deg"],
  // });
  // const spin = animVal.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0deg", "360deg"],
  // });
  const movingMargin = animVal.interpolate({
    inputRange: [0, 0.2, 0.5, 0.8, 1],
    outputRange: [0, -50, 0, 50, 0],
  });

  const animate = () => {
    console.log("animate...");
    Animated.parallel([
      Animated.spring(animV1, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.timing(animVal, {
        toValue: 1,
        duration: 3000,
        //   easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      animV1.setValue(0.2);
      animVal.setValue(0);
    });
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          width: 180,
          height: 150,
          marginTop: 150,
          transform: [{ scale: animV1 }],
        }}
        source={require("./assets/IT_Logo.png")}
      />
      <Animated.Text
        style={{
          width: 180,
          height: 150,
          textAlign: "center",
          transform: [{ translateX: movingMargin }],
        }}
      >
        {" "}
        Welcome to IT!{" "}
      </Animated.Text>
      <View style={styles.Button}>
        <Button title="Run Parallel" onPress={animate} style={styles.Button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
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

// export default SpringScreen;
