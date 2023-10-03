import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import CategoryMealsScreen from "./CategoryMealsScreen";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from 'react-redux'


// const FavMeals= MEALS.filter( (m) => m.id=="m1"||m.id=="m5" );

const FavoritesScreen = (props, {navigation}) => {
console.log("favmeal, :", FavMeal);

  const FavMeal = useSelector((state) => state.meal.favoriteMeals);
  return (
    <View style={styles.screen}>
      {/* <Text>The Favorites Screen!</Text> */}
      <MealList
      listData={FavMeal}
      navigation={props.navigation}
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
