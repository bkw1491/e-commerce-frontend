import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICartItem } from "@interfaces/ICartItem";
import { CartAPI } from "@api/cart";

export const cartGet = createAsyncThunk("cart/get", async () => {
	const { data, error } = await CartAPI.getCart();
	if (error) throw error; //rejects promise on thunk
	return data;
});

export const cartAdd = createAsyncThunk(
	"cart/add",
	async (cart: Pick<ICartItem, "product_id" | "quantity">) => {
		const { data, error } = await CartAPI.addToCart(cart);
		if (error) throw error; //rejects promise on thunk
		return data;
	}
);

export const cartUpdate = createAsyncThunk(
	"cart/update",
	async (cart: ICartItem, thunkAPI) => {
		const { data, error } = await CartAPI.updateCart(cart);
		if (error) throw error; //rejects promise on thunk
		return data;
	}
);

export const cartDelete = createAsyncThunk(
	"cart/delete",
	async (id: Pick<ICartItem, "id">, thunkAPI) => {
		const { data, error } = await CartAPI.removeFromCart(id);
		if (error) throw error; //rejects promise on thunk
		return data;
	}
);

export const cartCheckout = createAsyncThunk(
	"cart/checkout",
	async thunkAPI => {
		const { data, error } = await CartAPI.checkout();
		if (!error) window.location.href = data;
	}
);
