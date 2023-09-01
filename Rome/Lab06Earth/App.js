import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import CategoriesScreen from "./screens/CategoriesScreen"
// import CategoryMealsScreen from "./screens/CategoryMealsScreen"
// import MealDetailScreen from "./screens/MealDetailScreen"
import MyNavigator from "./navigation/MyNavigator";

// const MealsNavigator = createNativeStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return <MyNavigator />;
    // <NavigationContainer>
    //   <MealsNavigator.Navigator initialRouteName="CategoriesScreen"
    //     screenOptions={{
    //       headerStyle: { backgroundColor: "#4a148c", },
    //       headerTintColor: "white"
    //     }}>
    //     <MealsNavigator.Screen
    //       name="Categories"
    //       component={CategoriesScreen}
    //       options={{
    //         title: "Meal Categories",

    //       }}
    //     />
    //     <MealsNavigator.Screen
    //       name="CategoryMeals"
    //       component={CategoryMealsScreen}
    //       options={({route}) => ({
    //         title: route.params.title,
    //       })}
    //     />
    //     <MealsNavigator.Screen
    //       name="MealDetail"
    //       component={MealDetailScreen}
    //       options={({route}) => ({
    //         title: route.params.title,
    //       })}
    //     />
    //   </MealsNavigator.Navigator>
    // </NavigationContainer>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
