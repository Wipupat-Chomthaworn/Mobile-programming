import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";
const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen!</Text>
      {/* <ca/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
