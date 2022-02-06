import { IServerResponse } from "@interfaces/IServerResponse";

const baseUrl = "https://ecommerce-restapi.herokuapp.com";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const API = {
	async request<T>(url: string, method: HttpMethod, data?: {}) {
		//form full url
		const endpoint = `${baseUrl}${url}`;
		//application/json in headers if sending data
		const headers: HeadersInit = data
			? { "Content-Type": "application/json" }
			: {};

		const info: RequestInit = {
			method,
			redirect: "follow",
			body: JSON.stringify(data),
			credentials: "include",
			headers
		};

		//parse result to json
		const res = await fetch(endpoint, info);
		//return parsed json as generic server response obj
		const json = (await res.json()) as IServerResponse<T>;
		if (json.error) console.log(json.error);
		return json;
	}
};
