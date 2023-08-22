import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tab2 = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Tab-2 Screen !!</Text>
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

export default Tab2;
