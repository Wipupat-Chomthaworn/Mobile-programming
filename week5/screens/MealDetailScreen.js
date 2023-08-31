import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route, navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้


  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>
      {route.params.Title}

        {/* ...เขียนโค้ดเพิ่มแสดงชื่อเมนูอาหารที่เลือก... */}

      </Text>
      <Text>
        {route.params.Steps}

        {/* ...เขียนโค้ดเพิ่มแสดงวิธีทำอาหารของเมนูที่เลือก... */}

        </Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          // navigation.navigate("Categories");
          navigation.popToTop();
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
