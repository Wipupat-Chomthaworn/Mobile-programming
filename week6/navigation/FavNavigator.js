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
{/* <NavigationContainer>
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
    </NavigationContainer> */}
// สร้าง Navigator หลัก
const Stack = createNativeStackNavigator();
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ drawerActiveTintColor: "orange", drawerInactiveTintColor: "gray", }} >   
       <Stack.Screen name="Draw_1" component={Draw1} options={{ drawerLabel: "Menu 1", drawerIcon: ({ color }) => { return <AntDesign name="tags" size={24} color={color} />; }, }} /> 
        <Stack.Screen name="Draw_2" component={Draw2} />   
        </Stack.Navigator>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
    </NavigationContainer>
  );
}
