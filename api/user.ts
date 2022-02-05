import { IUser } from "@interfaces/IUser";
import { API } from "@api/index";

export const UserAPI = {
	async registerUser(user: Omit<IUser, "id">) {
		return await API.request<number>("/user/register", "POST", user);
	},

	async authUser(user: Omit<IUser, "id" | "confirm">) {
		return await API.request<string>("/user/auth", "POST", user);
	}
};
