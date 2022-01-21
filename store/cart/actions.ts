import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICartItem } from '@interfaces/ICartItem';
import { addToCart, updateCart, removeFromCart } from '@api/cart.api';

export const cartAdd = createAsyncThunk(
  'cart/add',
  async (cart: {product_id: number, quantity: number}) => {
    const { data, error } = await addToCart(cart);
    if(error) { throw error }  //rejects promise on thunk
    return data;
  },
);

export const cartUpdate = createAsyncThunk(
  'cart/update',
  async (cart: ICartItem, thunkAPI) => {
    const { data, error } = await updateCart(cart);
    if(error) { throw error }  //rejects promise on thunk
    return data;
  },
);

export const cartDelete = createAsyncThunk(
  'cart/delete',
  async (id: number, thunkAPI) => {
    const { data, error } = await removeFromCart(id);
    if(error) { throw error }  //rejects promise on thunk
    return data;
  },
);