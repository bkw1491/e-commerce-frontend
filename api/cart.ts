import { ICartItem } from "@interfaces/ICartItem";
import { API } from "@api/index";

export const CartAPI = {
	async getCart() {
		return await API.request<ICartItem[]>("/cart", "GET");
	},

	async addToCart(product: Pick<ICartItem, "product_id" | "quantity">) {
		return await API.request<ICartItem[]>("/cart", "POST", product);
	},

	async removeFromCart(id: Pick<ICartItem, "id">) {
		return await API.request<ICartItem[]>("/cart", "DELETE", id);
	},

	async updateCart(item: ICartItem) {
		return await API.request<ICartItem[]>("/cart", "PUT", item);
	},

	async checkout() {
		return await API.request<string>("/cart/checkout", "POST");
	}
};
