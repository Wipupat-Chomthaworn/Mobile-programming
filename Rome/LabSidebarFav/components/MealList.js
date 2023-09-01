import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";
const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetail", {title: itemData.item.title, mealStep: itemData.item.steps });
        }}
      /> 
    );
  };

  return (
    <View style={styles.list}>
      <View style={styles.screen}>
        <FlatList
          style={{ width: "100%" }}
          data={props.listData}
          renderItem={renderMealItem}
        />
      </View>
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
