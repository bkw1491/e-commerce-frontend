import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userLogout, userRegister } from "./actions";

const initialState = {
	authed: false,
	loading: false,
	error: ""
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			//register pending
			.addCase(userRegister.pending, state => {
				state.authed = false;
				state.error = "";
				state.loading = true;
			})
			//register success
			.addCase(userRegister.fulfilled, state => {
				return initialState;
			})
			//register failure
			.addCase(userRegister.rejected, (state, action) => {
				state.authed = false;
				state.loading = false;
				state.error = action.error.message!;
			})
			//login pending
			.addCase(userLogin.pending, (state, action) => {
				state.authed = false;
				state.error = "";
				state.loading = true;
			})
			//login success
			.addCase(userLogin.fulfilled, (state, action) => {
				state.loading = false;
				state.authed = true;
				state.error = "";
			})
			//login failure
			.addCase(userLogin.rejected, (state, action) => {
				state.loading = false;
				state.authed = false;
				state.error = action.error.message!;
			})
			//logout
			.addCase(userLogout.fulfilled, (state, action) => {
				return initialState;
			});
	}
});
