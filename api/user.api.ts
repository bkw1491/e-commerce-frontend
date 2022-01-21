import { IUser } from "@interfaces/IUser";
import { request } from "@utils/request";

export async function register(user: Omit<IUser, "id">) {
  //register endpoint returns user_id of type number
  return await request<number>("/register", "POST", user);
}

export async function login(user: Omit<IUser, "id" | "confirm">) {
  //login endpoint returns a message of type string
  return await request<string>("/auth", "POST", user);
}