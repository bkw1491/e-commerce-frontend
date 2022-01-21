import { IProduct } from "@interfaces/IProduct";

export interface ICartItem extends Omit<IProduct, "id" | "category_id" | "inventory"> {
  id: number
  product_id: number
  quantity: number
}