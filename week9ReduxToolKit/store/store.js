import {configureStore } from '@reduxjs/toolkit'
// import { MEALS } from '../data/dummy-data'
import mealSlice from './meals'



const store = configureStore({
  reducer: {
    meal: mealSlice
}
})
export default store



// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// {value: 1}