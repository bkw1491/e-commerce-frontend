import { IServerResponse } from "@interfaces/IServerResponse";

const baseUrl = "https://ecommerce-restapi.herokuapp.com/api";

export async function request<T>(url: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: {}) {
  //TODO narrower type for data
  //form full url
  const endpoint = `${baseUrl}${url}`
  //include application/json in req headers
  //parse result to json
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
    credentials: 'include',
    headers : { 'Content-Type': 'application/json' },
  });
  //return parsed json as generic server response obj
  return await res.json() as IServerResponse<T>;
}