import { ICategory } from "@interfaces/ICategory";
import { request } from "@utils/request";

export const CategoryAPI = {

  /**
  * @returns list of all categories
  */
  async getAll() {
  
    return await request<ICategory[]>("/category", "GET");
  },
 
  /**
  * @returns list of products with supplied category_id
  */
  async filter(category_id: number) {
  
    return await request<ICategory[]>(`/category/${category_id}`, "POST");
  }
}
