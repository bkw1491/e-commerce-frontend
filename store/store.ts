import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/reducer";
import { cartSlice } from "./cart/reducer";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  cart: cartSlice.reducer
});

//intializes redux store
export const store = configureStore({reducer: rootReducer})
//infer`types from store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch