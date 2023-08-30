import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FiltersScreen from '../screens/FiltersScreen';

const FiltersNavigator = createNativeStackNavigator();

export default function FiltersNavigatorStack() {
  return (
    <FiltersNavigator.Navigator>
      <FiltersNavigator.Screen name="Filters" component={FiltersScreen} />
    </FiltersNavigator.Navigator>
  );
}
