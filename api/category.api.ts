import { ICategory } from "@interfaces/ICategory";
import { request } from "@utils/request";

export const CategoryAPI = {

  /**
  * @returns list of all categories
  */
  async getAll() {
  
    return await request<ICategory[]>("/category", "GET");
  },
}
