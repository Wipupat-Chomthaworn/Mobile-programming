import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';


const Stack = createNativeStackNavigator();

export default function FavNav() {
    return (
        <Stack.Navigator initialRouteName='FavNav'
            screenOptions={{headerStyle: { backgroundColor: '#4a148c' },headerTintColor: 'white',}}
        >
            <Stack.Screen name="FavNav" component={FavoritesScreen} options={{ title: 'Your Favorites', }}/>

        </Stack.Navigator>
    )
};
