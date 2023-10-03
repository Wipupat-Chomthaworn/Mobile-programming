import { createSlice} from '@reduxjs/toolkit'
import { MEALS } from '../data/dummy-data'


const mealSlice = createSlice({
  name: 'meals',
  initialState: {
    // value: 0
    meals:MEALS,
    filteredMeals: MEALS,
    favoriteMeals:[],
  },
  reducers: {
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

export const { toggleFavorite } = mealSlice.actions;
export default mealSlice.reducer;