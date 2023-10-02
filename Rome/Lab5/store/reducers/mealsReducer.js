import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../../data/dummy-data'
const initialState = {
    meals: MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[]
    };

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_FAVORITE" :
            const favemeal = state.favoriteMeals.findIndex(fav => fav.id == action.mealId)
           
        if(favemeal >= 0){
            const update = [...state.favoriteMeals]
            update.splice(favemeal,1)
            return {...state,favoriteMeals:update}
        } else{
            const meal = state.meals.find((meal) => action.mealId === meal.id )
            const update = [...state.favoriteMeals,meal]
            return {...state,favoriteMeals:update}
        }
        default:
            return state
        }
}

export default mealsReducer

const styles = StyleSheet.create({})