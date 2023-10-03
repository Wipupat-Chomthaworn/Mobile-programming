import { createSlice, configureStore } from '@reduxjs/toolkit'
import { MEALS } from '../data/dummy-data'


const mealSlice = createSlice({
  name: 'meals',
  initialState: {
    // value: 0
    meals:MEALS,
    favoriteMeals:[],
  },
  reducers: {
    // favAdd: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes

    //   state.value += 1
    // },
    // decremented: state => {
    //   state.value -= 1

    toggleFavorite: (state, action) => {
        // console.log("payload na: "+action.payload.id);
        console.log("Fav na: " + state.favoriteMeals);
        const isInFav =  state.favoriteMeals.findIndex(meal =>  meal.id === action.payload);

        if (isInFav >= 0) {
            //remove from favorite
            const updateStateFav =  state.favoriteMeals.filter(meal => meal.id !== action.payload);
            return { ...state, favoriteMeals: updateStateFav };
            // return state;
        } else {
            //add to favorite
            // console.log("Item"+ MEALS, "ID"+ action.payload);
            
            const meal = state.meals.find(meal => meal.id === action.payload);
            const updateFav =  [...state.favoriteMeals, meal]
            return { ...state, favoriteMeals: updateFav };
            // console.log("Fav na: " + state.favoriteMeals));
          
        }
    }
  }
})

export const { toggleFavorite } = mealSlice.actions