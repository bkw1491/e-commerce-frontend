import { IServerResponse } from "@interfaces/IServerResponse";

const baseUrl = "https://ecommerce-restapi.herokuapp.com";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const API = {
	async request<T>(url: string, method: HttpMethod, data?: {}) {
		//form full url
		const endpoint = `${baseUrl}${url}`;
		//include application/json in req headers
		const info: RequestInit = {
			method,
			mode: "cors",
			redirect: "follow",
			body: JSON.stringify(data),
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			}
		};
		//parse result to json
		const res = await fetch(endpoint, info);
		//return parsed json as generic server response obj
		return (await res.json()) as IServerResponse<T>;
	}
};
