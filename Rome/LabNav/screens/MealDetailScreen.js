import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route, navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const title = route.params.title;
  const mealStep = route.params.mealStep;


  return (
    <View style={styles.screen}>
      {/* <Text>The Meal Detail Screen!</Text> */}
      <Text>{title}</Text>
      <FlatList
        data={mealStep}
        renderItem={({item, index}) => <Text>{index+1} {item}</Text>}

      />
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.navigate("Category")
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
  },
});

export default MealDetailScreen;
