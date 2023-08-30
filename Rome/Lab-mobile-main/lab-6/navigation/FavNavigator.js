import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const FavNavigator = createNativeStackNavigator();

export default function FavNavigatorStack() {
  return (
    <FavNavigator.Navigator>
      <FavNavigator.Screen name="Favorites" component={FavoritesScreen} />
      <FavNavigator.Screen name="MealDetail" component={MealDetailScreen} />
    </FavNavigator.Navigator>
  );
}
