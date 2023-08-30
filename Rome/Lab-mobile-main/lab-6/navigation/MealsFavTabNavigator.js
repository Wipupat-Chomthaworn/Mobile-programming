import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsNavigatorStack from './MealNavigator';
import FavNavigatorStack from './FavNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MealsFavTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Meals"
        component={MealsNavigatorStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="ios-restaurant" size={size} color={color} />,
          headerShown:false
        }}
      />
      <Tab.Screen
        name="FavNavigatorStack"
        component={FavNavigatorStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="ios-star" size={size} color={color} />,
          headerShown:false
        }}
      />
    </Tab.Navigator>
  );
}
