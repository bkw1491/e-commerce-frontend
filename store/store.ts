import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "@utils/localStorage";
import { authSlice } from "./auth/reducer";
import { cartSlice } from "./cart/reducer";

const rootReducer = combineReducers({
	auth: authSlice.reducer,
	cart: cartSlice.reducer
});

//intializes redux store
export const store = configureStore({
	reducer: rootReducer,
	preloadedState: loadFromLocalStorage()
});

store.subscribe(() => saveToLocalStorage(store.getState()));

//infer`types from store
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
