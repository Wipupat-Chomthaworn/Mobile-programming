import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Screen2 = ({ route, navigation }) => {
  const { prev, id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Screen 2 !!</Text>
      <Text style={styles.content}>Prev. Screen is {prev}</Text>
      <Text style={styles.content}>ID: {id}</Text>
      <Button
        title="Go to Screen 3"
        onPress={() => {
          navigation.navigate("S3");
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

export default Screen2;
