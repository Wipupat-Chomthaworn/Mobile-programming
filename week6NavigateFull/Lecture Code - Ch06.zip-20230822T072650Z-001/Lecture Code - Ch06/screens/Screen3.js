import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Screen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Screen 3 !!</Text>
      <Button
        title="Go to the first screen"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 20,
  },
});

export default Screen3;
