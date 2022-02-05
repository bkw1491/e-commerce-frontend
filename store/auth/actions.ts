import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "@api/user";
import { IUser } from "@interfaces/IUser";

export const userRegister = createAsyncThunk(
	"auth/register",
	async (creds: Omit<IUser, "id">) => {
		const { data, error } = await UserAPI.registerUser(creds);
		if (error) throw new Error(error); //rejects promise on thunk
		return data;
	}
);

export const userLogin = createAsyncThunk(
	"auth/login",
	async (creds: Omit<IUser, "id" | "confirm">) => {
		const { data, error } = await UserAPI.authUser(creds);
		if (error) throw new Error(error); //rejects promise on thunk
		return data;
	}
);
