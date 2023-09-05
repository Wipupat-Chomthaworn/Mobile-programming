import React, { useRef } from "react";
// import library ที่จำเป็น
import { Animated, StyleSheet, Text, View, StatusBar } from "react-native";

export default function ParallelScreen() {
  const springVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0
  const spring = () => {
    console.log("spring..");
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      tension: 10,
      // bounciness: 30,
      // speed: 20,
      useNativeDriver: true,
    }).start(() => {
      springVal.setValue(0.3);
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
          source={require("./assets/IT_Logo.png")}
        />
        <Button title="Spring" onPress={spring} />
      </View>
    );
  };
}
