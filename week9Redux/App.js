import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyNavigator from "./navigation/MyNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import คอมโพเนนต์ที่จำเป็น done

const StackMeal = createNativeStackNavigator();
const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);
export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    <Provider store={store}>
      <MyNavigator/>
    </Provider>
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
