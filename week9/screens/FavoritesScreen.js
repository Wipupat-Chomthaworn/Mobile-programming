import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

// const FavMeals= MEALS.filter( (m) => m.id=="m1"||m.id=="m5" );
const FavMeals= MEALS;
// const FavMeals = useSelector((state) => state.meals.favoriteMeals);

console.log("favmeal, :", FavMeals);
const FavoritesScreen = (props, { navigation }) => {
  return (
    <View style={styles.screen}>
      {/* <Text>The Favorites Screen!</Text> */}
      <MealList listData={FavMeals} navigation={props.navigation} />
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
