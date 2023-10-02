import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
   };

