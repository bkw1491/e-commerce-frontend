import { useState } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { ICartItem } from "@interfaces/ICartItem";
import { cartDelete, cartUpdate } from "@store/cart/actions";

type CartCardProps = {
  item: ICartItem
}

function CartCard({ item } : CartCardProps) {
  //pre-typed dispatch hook, needed to remove and update items
  const dispatch = useAppDispatch();
  //local state to allow changing of item quantity
  const [qty, setQty] = useState(item.quantity)


  function handleRemove() {
    dispatch(cartDelete(item.id))
  }

  function handleUpdate() {
    item.quantity = qty;
    dispatch(cartUpdate(item));
  }

  return (

    <div className="h-48 flex flex-row gap-5 py-4">

      <div className="flex-shrink-1 w-28 h-32 rounded-md overflow-hidden">

        <img
          src={item.image_url}
          alt={item.image_alt}
          className="object-center object-cover"/>

      </div>

      {/* Name, Price, Quantity */}

      <div className="flex flex-col flex-grow justify-evenly w-max">

        <h1 className="text-gray-700">{item.name}</h1>
        <h2 className="text-gray-500">£{item.price * qty} GBP</h2>

        <div className="flex flex-row justify-between">

          {/* Quantity Counter */}

          <div className="flex flex-row border-[1px]">

            <button>
              <PlusIcon 
                className="w-10 h-10 p-3"
                onClick={() => setQty(qty + 1)}/>
            </button>

            <span className="p-1 flex justify-center items-center text-sm">
              {qty}
            </span>

            <button>
              <MinusIcon 
                className="w-10 h-10 p-3"
                onClick={() => setQty(qty - 1)}/>
            </button>
          </div>

          {/* Trash Icon */}

          <button
            onClick={handleRemove}>
            <TrashIcon className="w-5 h-5 hover:text-red-500"/>
          </button>
        </div>

      </div>
    </div>
  );
}

export default CartCard;
