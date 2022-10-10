import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import test from './test'
const reducer = combineReducers({
  // here we will be adding reducers
  test
})
const store = configureStore({
  reducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;