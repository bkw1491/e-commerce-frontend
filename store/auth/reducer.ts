import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userLogout, userRegister } from './actions';

const initialState = {
  authed: false,
  error: ""
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //register success
      .addCase(userRegister.fulfilled, (state) => {
        state.authed = false
        state.error = "";
      })
      //register failure
      .addCase(userRegister.rejected, (state, action) => {
        state.authed = false;
        state.error = action.error.message!
      })
      //login success
      .addCase(userLogin.fulfilled, (state) => {
        state.authed = true
        state.error = "";
      })
      //login success
      .addCase(userLogin.rejected, (state, action) => {
        state.authed = false
        state.error = action.error.message!
      })
      //logout sync action
      .addCase(userLogout, (state) => {
        state.authed = false;
      })
  }
});