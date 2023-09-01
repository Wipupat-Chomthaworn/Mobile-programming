import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

const MealList = (props) => {
  const navigation = props.navigation;
  const listData = props.listData;
  const renderMealItem = (itemData) => {
    return (
      //เขียนโค้ดเพิ่ม
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate("MealDetail", {steps: itemData.item.steps, title: itemData.item.title })
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        //เขียนโค้ดเพิ่ม
        style={{ width: "100%", height: "100%" }}
        data={listData}
        navigation={navigation}
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
