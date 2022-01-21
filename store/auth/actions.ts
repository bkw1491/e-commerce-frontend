import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { register, login } from '@api/user.api';
import { IUser } from '@interfaces/IUser';

export const userRegister = createAsyncThunk(
  'auth/register',
  async (creds: Omit<IUser, "id">) => {
    const { data, error } = await register(creds);
    if(error) { throw new Error(error) } //rejects promise on thunk
    return data;
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (creds: Omit<IUser, "id" | "confirm">) => {
    const { data, error } = await login(creds);
    if(error) { throw new Error(error) } //rejects promise on thunk
    return data;
  }
);

export const userLogout = createAction('auth/logout')