import { IProduct } from "@interfaces/IProduct";
import { request } from "@utils/request";

export async function getProducts() {

  return await request<IProduct[]>("/product/all", "GET")
}

export async function getProduct(id: number) {
  
  return await request<IProduct>(`/product`, "POST", {id})
}