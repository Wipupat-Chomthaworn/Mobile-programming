import React from "react";
import {
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
  View,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    console.log("item" ,itemData.item)
    return (
      //เขียนโค้ดเพิ่มa
      // <CategoryMealsScreen/>
      // <MealItem/>
      <MealItem
        title={"Meal"}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity} //this is props that we sent to MealItem
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate(
            "MealDetail" /* routename(name in sceen we want to navigate to*/,
            {
              Id: itemData.item.id,
              Title: itemData.item.title,
              Steps: itemData.item.steps /* params */,
            }
          );
        }}
      />
    );
    // );
  };

  return (
    <View style={styles.list}>
      <FlatList
        //เขียนโค้ดเพิ่ม
        style={{ width: "100%" }}
        data={props.listData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
