import React from "react";
// import library ที่จำเป็น
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MyNavigator from "./navigation/MyNavigator";
// Tab
import MealNavigator from "./MealNavigator";
import FavNavigator from "./FavNavigator";
// import screen ที่เกี่ยวข้อง

// สร้าง navigator ตามโจทย์กำหนด

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// function MyXXNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// อาจกำหนด Navigator เพิ่มได้
// function MyYYNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }
{
  /* <NavigationContainer>
      <StackMeal.Navigator initialRouteName="S1" screenOptions={{ headerStyle: { backgroundColor: "#4a148c" },  headerTintColor: "white", }}>
        
        <StackMeal.Screen
          name="Categories"
          component={CategoriesScreen}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4a148c",
              headerTintColor: "white",
            },
          }}
        />
        <StackMeal.Screen
          name="CategoryMeals"
          
          component={CategoryMealsScreen}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4a148c",
              headerTintColor: "white",
            },
          }}
          // options={
          //   ({ route }) => ({
          //   title: "ID-" + route.params.id.toString(),
          //   }) }
        />
        <StackMeal.Screen
          name="MealDetail"
          component={MealDetailScreen}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4a148c",
              headerTintColor: "white",
            },
          }}
        />
      </StackMeal.Navigator>
    </NavigationContainer> */
}
// สร้าง Navigator หลัก
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MealsFavTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meals" component={ MealNavigator} />
      <Tab.Screen name="Tab_2" component={FavNavigator} />
    </Tab.Navigator>
  );
}
