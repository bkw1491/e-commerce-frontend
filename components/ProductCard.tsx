import React from "react";
import Link from 'next/link';

import { IProduct } from "@interfaces/IProduct";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { cartAdd } from "@store/cart/actions";


type ProductCardProps = {
  product: IProduct
}


export default function ProductCard(props : ProductCardProps) {

  const { id, name, price, image_url, image_alt } = props.product

  const dispatch = useAppDispatch();

  function handleAdd(e: React.MouseEvent<HTMLButtonElement>) {
    //html id attribute is type string, must cast
    dispatch(cartAdd({ product_id: Number(e.currentTarget.id),
      quantity: 1 }));
  }

  return (
    <Link href={`/product/${id}`}>

      <a className="w-full bg-midtone rounded-md p-1 h-[19rem] lg:h-[27rem]">

        <div className="relative overflow-hidden h-3/4 w-full p-2">

          <button 
            className="absolute top-3 right-3 bg-midtone rounded-full shadow-midtone shadow-md p-2"
            id={id.toString()}
            onClick={handleAdd}>

            <ShoppingBagIcon className="w-5 h-5 text-contrast"/>

          </button>

          {/* Product Image */}
          
          <div className="flex-shrink-0 object-center object-contain">

          <img
            src={image_url}
            alt={image_alt}
            className="w-full h-full"/>

        </div>


          </div>

          {/* Product Name And Pricing */}

          <div className="h-1/4 flex flex-col justify-between px-2 py-1">

          <h2 className="text-sm text-contrast">
            {name}
          </h2>

          <h2 className="text-sm text-contrast font-bold">
            £{price}.00
          </h2>
        </div>
      </a>
    </Link>
  )
}
