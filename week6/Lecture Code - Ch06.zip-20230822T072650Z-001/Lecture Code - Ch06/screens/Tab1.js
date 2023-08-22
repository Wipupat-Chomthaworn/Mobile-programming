import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Tab1 = ({ navigation }) => {
  // console.log("============ Tab1 =============");
  // console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Tab-1 Screen !!</Text>
      <Button
        title="Go to Tab_3"
        onPress={() => {
          navigation.navigate("Tab_3");
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

export default Tab1;
