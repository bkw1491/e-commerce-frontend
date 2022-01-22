import { ICartItem } from '@interfaces/ICartItem';
import { createSlice } from '@reduxjs/toolkit';
import { cartAdd, cartUpdate, cartDelete, cartGet } from './actions';

export const cartSlice = createSlice({
  name: 'auth',
  initialState: { cart: [] as ICartItem[] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //cart add success
      .addCase(cartGet.fulfilled, (state, action) => {
        state.cart = action.payload;
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
  }
});