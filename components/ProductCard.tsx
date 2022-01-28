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
    <div className="w-full bg-midtone shadow-md shadow-darker p-1 h-[19rem]">

      <div className="relative overflow-hidden h-3/4 w-full p-2">

        <button 
          className="absolute top-3 right-3 bg-midtone rounded-full shadow-midtone shadow-md p-2"
          id={product.id.toString()}
          onClick={handleAdd}>

          <ShoppingBagIcon className="w-5 h-5 text-contrast"/>

        </button>

        {/* Product Image */}
        
        <div className="flex-shrink-1 aspect-w-1 aspect-h-1">

        <img
          src={product.image_url}
          alt={product.image_alt}
          className="w-full h-full object-center object-cover"/>

      </div>


        </div>

        {/* Product Name And Pricing */}

        <div className="h-1/4 flex flex-col justify-between px-2 py-1">

        <h2 className="text-sm text-contrast">
          {product.name}
        </h2>

        <h2 className="text-sm text-contrast font-bold">
          £{product.price}.00
        </h2>
      </div>
    </div>
  )
}
