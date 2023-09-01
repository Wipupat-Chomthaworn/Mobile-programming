import React from "react";
import {View, StyleSheet,} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {

  // const catId = route.params.categoryId;
  const catId = props.route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <MealList
          listData={displayedMeals}
          navigation={props.navigation}
       />
    </View>

  );
};

// const CategoryMealsScreen = ({route, navigation}) => {

//   // const catId = route.params.categoryId;
//   const catId = route.params.categoryId;
//   const displayedMeals = MEALS.filter(
//     (meal) => meal.categoryIds.indexOf(catId) >= 0
//   );

//   return (
//     <View style={styles.screen}>
//       <MealList
//           listData={displayedMeals}
//           navigation={navigation}
//        />
//     </View>

//   );
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
