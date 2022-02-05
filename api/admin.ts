import { ICategory } from "@interfaces/ICategory";
import { IInventory } from "@interfaces/IInventory";
import { IProduct } from "@interfaces/IProduct";
import { API } from "@api/index";

export const AdminAPI = {
	//categories
	async createCategory(category: Omit<ICategory, "id">) {
		return await API.request<ICategory>("/admin/category", "POST", category);
	},

	async updateCategory(category: ICategory) {
		return await API.request<ICategory>("/admin/category", "PUT", category);
	},

	async deleteCategory(id: Pick<ICategory, "id">) {
		return await API.request<ICategory>("/admin/category", "DELETE", id);
	},

	//products
	async createProduct(product: Omit<IProduct, "id">) {
		return await API.request<IProduct>("/admin/product", "POST", product);
	},

	async updateProduct(product: IProduct) {
		return await API.request<IProduct>("/admin/product", "PUT", product);
	},

	async deleteProduct(id: Pick<IProduct, "id">) {
		return await API.request<IProduct>("/admin/product", "DELETE", id);
	},

	//inventory
	async getInventory(id: Pick<IInventory, "id">) {
		return await API.request<IInventory>("/admin/inventory", "POST", id);
	},

	async updateInventory(inventory: IInventory) {
		return await API.request<IInventory>("/admin/inventory", "POST", inventory);
	}
};
