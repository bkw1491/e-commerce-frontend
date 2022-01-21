import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICartItem } from '@interfaces/ICartItem';
import { CartAPI } from '@api/cart.api';

export const cartAdd = createAsyncThunk(
  'cart/add',
  async (cart: {product_id: number, quantity: number}) => {
    const { data, error } = await CartAPI.add(cart);
    if(error) { throw error }  //rejects promise on thunk
    return data;
  },
);

export const cartUpdate = createAsyncThunk(
  'cart/update',
  async (cart: ICartItem, thunkAPI) => {
    const { data, error } = await CartAPI.update(cart);
    if(error) { throw error }  //rejects promise on thunk
    return data;
  },
);

export const cartDelete = createAsyncThunk(
  'cart/delete',
  async (id: number, thunkAPI) => {
    const { data, error } = await CartAPI.remove(id);
    if(error) { throw error }  //rejects promise on thunk
    return data;
  },
);