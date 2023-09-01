import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function MealNav() {
    return (
        <Stack.Navigator
            initialRouteName="Category"
            screenOptions={{
                headerStyle: {backgroundColor: '#4a148c'},
                headerTintColor: 'white',
            }}>
            <Stack.Screen name="Category" component={CategoriesScreen} />
            <Stack.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
                />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
    );

}
