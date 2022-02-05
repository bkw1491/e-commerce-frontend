import { ICategory } from "@interfaces/ICategory";
import { IProduct } from "@interfaces/IProduct";
import { API } from "@api/index";

export const ShopAPI = {
	async getAll() {
		return await API.request<IProduct[]>("/shop/products", "GET");
	},

	async getByDepartment(department: string) {
		return await API.request<IProduct[]>(`/shop/${department}`, "GET");
	},

	async getByCategory(department: string, category: string) {
		return await API.request<IProduct[]>(
			`/shop/${department}/${category}`,
			"GET"
		);
	},

	async getByID(id: string) {
		console.log(id);

		return await API.request<IProduct>(`/shop/products?id=${id}`, "GET");
	},

	async searchByName(name: string) {
		return await API.request<IProduct[]>(`/shop/products?name=${name}`, "GET");
	},

	//used for get static paths
	async listCategories() {
		return await API.request<ICategory[]>("/shop/categories", "GET");
	},

	listDepartments() {
		return ["Men", "Women", "Accessories"];
	}
};
