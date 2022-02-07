import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICartItem } from "@interfaces/ICartItem";
import { CartAPI } from "@api/cart";
import Router from "next/router";
import { IServerResponse } from "@interfaces/IServerResponse";
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { AppDispatch, RootState } from "@store/store";

export const cartGet = createAsyncThunk("cart/get", async thunkAPI => {
	return await checkAuth(CartAPI.getCart, thunkAPI);
});

export const cartAdd = createAsyncThunk(
	"cart/add",
	async (cart: Pick<ICartItem, "product_id" | "quantity">, thunkAPI) => {
		return await checkAuth(CartAPI.addToCart, thunkAPI, cart);
	}
);

export const cartUpdate = createAsyncThunk(
	"cart/update",
	async (cart: ICartItem, thunkAPI) => {
		return await checkAuth(CartAPI.updateCart, thunkAPI, cart);
	}
);

export const cartDelete = createAsyncThunk(
	"cart/delete",
	async (cart: Pick<ICartItem, "id">, thunkAPI) => {
		return await checkAuth(CartAPI.removeFromCart, thunkAPI, cart);
	}
);

export const cartCheckout = createAsyncThunk("cart/checkout", async () => {
	const { data, error } = await CartAPI.checkout();
	//this redirects the stripe checkout page
	if (!error) window.location.href = data;
});

//accepts any function that returns promise of type server response of type ICartItem array as args
//maybe stricter args type
//typing the thunkAPI here v.messy, not worth it since only ref'd in this method
async function checkAuth(
	fn: (args?: any) => Promise<IServerResponse<ICartItem[]>>,
	thunkAPI: any,
	args?: Partial<ICartItem>
) {
	//the current state
	const state = thunkAPI.getState();
	//if user not authed
	if (!state.auth.authed) {
		//redirect to login page
		Router.push("/user/login");
		//return empty cart- has to be empty if user not authed
		return [];
	}
	//user is logged in
	const { data, error } = await fn(args);
	//rejects promise on thunk
	if (error) throw new Error(error);
	//data will be payload of the action
	return data;
}
