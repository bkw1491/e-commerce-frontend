import { IProduct } from "@interfaces/IProduct";
import { request } from "@utils/request";

export const ProductAPI = {

  async getAll() {
  
    return await request<IProduct[]>("/product", "GET")
  },
  
  async getOne(id: number) {
    
    return await request<IProduct>(`/product/${id}`, "GET")
  }
}
