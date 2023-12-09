import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import CategoryMealsScreen from "./CategoryMealsScreen";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavMeals= MEALS.filter( (m) => m.id=="m1"||m.id=="m5" );

console.log("favmeal, :", FavMeals);
const x = [1,2,3,4];
let [one, two, three, four] = x;
console.log("number " , one, two, three, four);
const FavoritesScreen = (props, {navigation}) => {
  return (
    <View style={styles.screen}>
      {/* <Text>The Favorites Screen!</Text> */}
      <MealList
      listData={FavMeals}
      navigation={props.navigation}
      // navigation={navigation}

      />
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
