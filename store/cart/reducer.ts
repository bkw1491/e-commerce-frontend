import { ICartItem } from "@interfaces/ICartItem";
import { createSlice } from "@reduxjs/toolkit";
import { userLogout } from "@store/auth/actions";
import { cartAdd, cartUpdate, cartDelete, cartGet } from "./actions";

const initialState = {
	cart: [] as ICartItem[]
};

export const cartSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			//cart add success
			.addCase(cartGet.fulfilled, (state, action) => {
				state.cart = action.payload;
				console.log(state.cart);
			})
			//cart add success
			.addCase(cartAdd.fulfilled, (state, action) => {
				state.cart = action.payload;
			})
			//cart update success
			.addCase(cartUpdate.fulfilled, (state, action) => {
				state.cart = action.payload;
			})
			//cart delete success
			.addCase(cartDelete.fulfilled, (state, action) => {
				state.cart = action.payload;
			})
			//logout
			.addCase(userLogout, (state, action) => {
				return initialState;
			});
	}
});
