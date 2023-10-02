import { toggleFavorite } from "../actions/mealsAction";
import React from 'react'
import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  favoriteMeals: [],
  filteredMeals:MEALS
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
      case "TOGGLE_FAVORITE" :
          const favMealIndex = state.favoriteMeals.findIndex(fav => fav.id == action.mealId)
         //if found return index (mean meals already add so we gonna remove it)
      if(favMealIndex >= 0){
          const update = [...state.favoriteMeals]
          update.splice(favMealIndex,1) //delete that meal
          return {...state,favoriteMeals:update}
      } else{
        // if not found then we add meal to favMeals array
          const meal = state.meals.find((meal) => action.mealId === meal.id )
          const update = [...state.favoriteMeals,meal]
          return {...state,favoriteMeals:update}
      }
      default:
          return state
      }
}

export default mealsReducer

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INC_COUNTER:
//       return { counter: state.counter + 1, name: action.myname };
//     default:
//       return state;
//   }
// };

// export default testReducer;
