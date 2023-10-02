import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { CategoryMealsScreen } from './screens/CategoryMealsScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import MainNav from "./navigation/MyNavigator";
import mealsReducer from "./store/reducers/mealsReducer";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer);
export default function App() {

  return (
    <Provider store={store}>
      <MainNav />
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
