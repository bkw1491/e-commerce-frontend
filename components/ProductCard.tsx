import React from "react";

import { IProduct } from "@interfaces/IProduct";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { cartAdd } from "@store/cart/actions";
import { ICartItem } from "@interfaces/ICartItem";

type ProductCardProps = {
  product: IProduct | ICartItem
}


export default function ProductCard({ product } : ProductCardProps) {

  const dispatch = useAppDispatch();

  function handleAdd(e: React.MouseEvent<HTMLButtonElement>) {
    //html id attribute is type string, must cast
    dispatch(cartAdd({ product_id: Number(e.currentTarget.id),
      quantity: 1 }));
  }

  return (
    <div className="w-full">

      <div className="relative h-3/4 w-full p-1">

        <button 
          className="absolute top-3 right-3 bg-gray-50 rounded-full shadow-md p-2"
          id={product.id.toString()}
          onClick={handleAdd}>

          <ShoppingBagIcon className="w-5 h-5"/>

        </button>

        {/* Product Image */}
        
        <img
          src={product.image_url}
          alt={product.image_alt}/>


        </div>

        {/* Product Name And Pricing */}

        <div className="h-1/4 flex flex-col justify-between p-2">

        <h2 className="text-sm text-gray-700">
          {product.name}
        </h2>

        <h2>£{product.price}</h2>
      </div>
    </div>
  )
}
