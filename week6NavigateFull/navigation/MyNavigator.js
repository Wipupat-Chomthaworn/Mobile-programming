import React from "react";
// import library ที่จำเป็น
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MealNavigator from "../screens/FavoritesScreen";
import { AntDesign } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
// import FavTab from "../screens/FavoritesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersSceen from "../screens/FiltersScreen";
import FavNavigator from "./FavNavigator";
// import screen ที่เกี่ยวข้อง

// สร้าง navigator ตามโจทย์กำหนด
// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// const Stack = createNativeStackNavigator();

function MyStackNavigator() {
  const StackMeal = createNativeStackNavigator();

  return (
    // กำหนดรายละเอียดของ navigator
    <StackMeal.Navigator
      initialRouteName="Categories" //set page that you want to start first
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
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
  );
}
// Route name : Favorites
// ▪ component เป็น FavoritesScreen
// o Route name : MealDetail
{
  /* <StackMeal.Navigator
      initialRouteName="Categories" //set page that you want to start first
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
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
    </StackMeal.Navigator> */
}
// อาจกำหนด Navigator เพิ่มได้
function MyTabNavigator() {
  const Tab = createBottomTabNavigator();

  console.log("Tab");

  return (
    // กำหนดรายละเอียดของ navigator
    <Tab.Navigator>
      <Tab.Screen
        name="Meals"
        component={MyStackNavigator}
        options={{
          headerShown:false, //hide header of tab
          tabBarIcon: ({ color }) => {
            return <AntDesign name="apple1" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavNavigator}
        options={{
          headerShown:false,
          tabBarIcon: ({ color }) => {
            return <AntDesign name="heart" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

// สร้าง Navigator หลัก
const Drawer = createDrawerNavigator();
export default function MyNavigator() {
  console.log("Drawer");
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}
      >
        <Drawer.Screen
          name="Menu"
          component={MyTabNavigator}
          options={{
            headerShown:false,
            drawerLabel: "Menu 1",
            drawerIcon: ({ color }) => {
              return <AntDesign name="tags" size={24} color={color} />;
            },
          }}
        />
        <Drawer.Screen name="Filter" component={FiltersSceen} 
        />
      </Drawer.Navigator>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
    </NavigationContainer>
  );
}
