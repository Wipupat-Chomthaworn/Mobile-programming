import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

export default function SpringScreen() {
  const springVal = useRef(new Animated.Value(0.3)).current; // Initial value for opacity: 0
  console.log("Spring Tab");
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
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ marginTop: 150,width: 180, height: 150, transform: [{ scale: springVal }] }}
        source={require("./assets/IT_Logo.png")}
      />
            <View style={styles.Button}>
      <Button title="Run Spring" onPress={spring} />

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
  Button:{
    // position:"absolute",
    width:"100%",
  }
});

// export default SpringScreen;
