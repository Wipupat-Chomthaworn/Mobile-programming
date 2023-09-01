import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
// import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ route, navigation }) => {
  const { prev, id } = route.params;
  const catId = id

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <MealList
        listData={displayedMeals}
        navigation={navigation}>
      </MealList>
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

export default CategoryMealsScreen;
