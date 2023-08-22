import React from "react";
// import library ที่จำเป็น
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import MealNavigator from "../screens/FavoritesScreen";
import FavNavigator from "../screens/FavoritesScreen";
// import screen ที่เกี่ยวข้อง

// สร้าง navigator ตามโจทย์กำหนด

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
const StackMeal = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyStackNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
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
  );
}

// อาจกำหนด Navigator เพิ่มได้
function MyYYNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <Tab.Navigator>
      <Tab.Screen name="Meals" component={ MyStackNavigator } />
      <Tab.Screen name="Fav" component={ FavNavigator }/>
    </Tab.Navigator>
  );
}
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
const Drawer = createDrawerNavigator();
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ drawerActiveTintColor: "orange", drawerInactiveTintColor: "gray", }} >   
       <Drawer.Screen name="Draw_1" component={Draw1} options={{ drawerLabel: "Menu 1", drawerIcon: ({ color }) => { return <AntDesign name="tags" size={24} color={color} />; }, }} /> 
        <Drawer.Screen name="Draw_2" component={Draw2} />   
        </Drawer.Navigator>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
    </NavigationContainer>
  );
}
