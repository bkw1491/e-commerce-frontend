import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "@utils/localStorage";
import { authSlice } from "./auth/reducer";
import { cartSlice } from "./cart/reducer";

const rootReducer = combineReducers({
	auth: authSlice.reducer,
	cart: cartSlice.reducer
});

//intializes redux store
//attempt to load existing state from local storage
export const store = configureStore({
	reducer: rootReducer,
	preloadedState: loadFromLocalStorage()
});

//fires on any change to the store
store.subscribe(() => {
	const state = store.getState();
	//if user logged out, and saved state exists, remove
	if (!state.auth.authed && localStorage.getItem("appState"))
		localStorage.removeItem("appState");
	//if user logged in, save localState to storage
	if (state.auth.authed) saveToLocalStorage(state);
});

//infer`types from store
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
