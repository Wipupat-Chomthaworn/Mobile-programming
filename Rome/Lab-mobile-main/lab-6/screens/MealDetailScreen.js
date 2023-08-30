import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route, navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  return (
    <View style={styles.screen}>
      {/* <Text>The Meal Detail Screen!</Text> */}
      <Text>Dish: {route.params.categoryTitle}</Text>
      <FlatList
        data={route.params.step}
        renderItem={({item, index})=>{return <Text style={styles.text}>Steps{index+1} : {item}</Text>}}
      />

      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate("CategoriesScreen")
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:30
  },
  text:{
    margin:20
  }
});

export default MealDetailScreen;
