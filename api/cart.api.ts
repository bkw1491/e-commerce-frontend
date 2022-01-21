import { ICartItem } from "@interfaces/ICartItem";
import { request } from "@utils/request";

export const CartAPI = {

  async get() {
  
    return await request<ICartItem[]>("/cart", "GET");
  },
  
  async add(product: {product_id: number, quantity: number}) {
    
    return await request<ICartItem[]>("/cart", "POST", product);
  },
  
  async remove(id: number) {
  
    return await request<ICartItem[]>("/cart", "DELETE", {id});
  },
  
  async update(item: ICartItem) {
  
    return await request<ICartItem[]>("/cart", "PUT", item);
  }
}
