import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

// import คอมโพเนนต์ที่จำเป็น done

const MealsNavigator = createNativeStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!
    //     Hi Owen!
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <MealsNavigator.Navigator initialRouteName="S1" screenOptions={{ headerStyle: { backgroundColor: "#4a148c" },  headerTintColor: "white", }}>
        
        <MealsNavigator.Screen
          name="Categories"
          component={CategoriesScreen}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4a148c",
              headerTintColor: "white",
            },
          }}
        />
        <MealsNavigator.Screen
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
        <MealsNavigator.Screen
          name="MealDetail"
          component={MealDetailScreen}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4a148c",
              headerTintColor: "white",
            },
          }}
        />
      </MealsNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
