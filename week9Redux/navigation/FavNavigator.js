import React from "react";
// import library ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

// import CategoriesScreen from "./screens/CategoriesScreen";
// import CategoryMealsScreen from "./screens/CategoryMealsScreen";
// import MealDetailScreen from "./screens/MealDetailScreen";
// import MyNavigator from "./navigation/MyNavigator";

// สร้าง Navigator หลัก
const StackFav = createNativeStackNavigator();
export default function FavNavigator() {
  return (
    <StackFav.Navigator
      initialRouteName="FavScreen"
      screenOptions={{
        drawerActiveTintColor: "orange",
        drawerInactiveTintColor: "gray",
      }}
    >
      <StackFav.Screen name="MealDetail" component={MealDetailScreen} />
      <StackFav.Screen
        name="FavScreen"
        component={FavoritesScreen}
        options={{
          drawerLabel: "Menu 1",
          drawerIcon: ({ color }) => {
            return <AntDesign name="tags" size={24} color={color} />;
          },
        }}
      />
    </StackFav.Navigator>
  );
}
