// import คอมโพเนนต์ที่จำเป็น
import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";


import { NavigationContainer } from "@react-navigation/native";


//MealFav and Filter
import MealsFavTabNavigator from "./MealsFavTabNavigator";
import FilterNavigator from "./FilterNavigator";

const Drawer = createDrawerNavigator();


export default function MyNavigator() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ drawerActiveTintColor: "orange", drawerInactiveTintColor: "gray", }} >
        <Drawer.Screen name="Meals" component={MealsFavTabNavigator}/>
        <Drawer.Screen name="Filters" component={FilterNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
