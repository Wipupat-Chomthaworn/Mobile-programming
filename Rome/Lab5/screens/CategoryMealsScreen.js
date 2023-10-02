import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from 'react-redux';
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
const CategoryMealsScreen = ({ route, navigation }) => {

  const catId = route.params.ID
  
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <MealList listData={displayedMeals} navigation={navigation} />

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { CategoryMealsScreen };
