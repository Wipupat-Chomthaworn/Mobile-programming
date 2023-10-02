import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";


const FavoritesScreen = ({ route, navigation }) => {
const favormeals = useSelector(state => state.meals.favoriteMeals)


  return (
      <MealList listData={favormeals} navigation={navigation} />

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
