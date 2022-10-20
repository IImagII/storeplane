import { configureStore, combineReducers } from '@reduxjs/toolkit'
import planeSlice from './plane/planeSlice'
import planesSlice from './planes/planesSlice'

const rootReducer = combineReducers({
   planes: planesSlice,
   plane: planeSlice,
})

export const store = configureStore({
   reducer: {
      reducer: rootReducer,
   },
})
