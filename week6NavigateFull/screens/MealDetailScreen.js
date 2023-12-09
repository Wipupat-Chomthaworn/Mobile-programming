import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (
  // {route, navigation}
   props
   ) => {
    console.log("props", props);
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเaอาไว้

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>
        {props.route.params.Steps}
        {/* {route.params.Steps} */}

        </Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          props.navigation.navigate("Categories");
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
