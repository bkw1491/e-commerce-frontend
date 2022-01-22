import { IProduct } from "@interfaces/IProduct";
import { request } from "@utils/request";

export const ProductAPI = {

  async getAll() {
  
    return await request<IProduct[]>("/product", "GET")
  },
  
  async getById(id: number) {
    
    return await request<IProduct>(`/product/${id}`, "GET")
  },

   async getByCategory(category_id: number) {
  
    return await request<IProduct[]>(`/category/${category_id}`, "POST");
  }
}
