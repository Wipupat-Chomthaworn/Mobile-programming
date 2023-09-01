import * as React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FavNav from "./FavNavigator";
import MealNavigator from "./MealNavigator";
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function MealsFavTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="MealsTab"
            screenOptions={{
                tabBarActiveTintColor: "darkblue",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: { backgroundColor: "#F5F5F5" },
                tabBarLabelStyle: { fontSize: 15 },
            }}
        >
               <Tab.Screen
                name="MealsTab"
                component={MealNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <AntDesign name="apple1" size={size} color={color} />;
                    },
                    headerShown: false,
                    title: "Meals",
                }}
            />
             <Tab.Screen
                name="FavoritesTab"
                component={FavNav}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <AntDesign name="star" size={size} color={color} />;
                    },
                    headerShown: false,
                    title: "Favorites",
                }}
            />
         
           
        </Tab.Navigator>
    );
};
