import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function FavNav() {
    return (
        <Stack.Navigator initialRouteName='FavNav'
            screenOptions={{headerStyle: { backgroundColor: '#4a148c' },headerTintColor: 'white',}}
        >
            <Stack.Screen name="FavNav" component={FavoritesScreen} options={{ title: 'Your Favorites', }}/>
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'Your Detail', }}/>
        </Stack.Navigator>
    )
};
