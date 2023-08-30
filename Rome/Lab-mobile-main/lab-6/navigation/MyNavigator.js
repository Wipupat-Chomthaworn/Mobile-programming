import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsFavTabNavigator from './MealsFavTabNavigator';
import FiltersNavigatorStack from './FiltersNavigator';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
const Drawer = createDrawerNavigator();

export default function MyNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MealScreen" options={{headerShown:false}} component={MealsFavTabNavigator} />
      <Drawer.Screen name="Filters" options={{headerShown:false}} component={FiltersNavigatorStack} />
    </Drawer.Navigator>
  );
}
