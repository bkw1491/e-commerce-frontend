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

  const {name, price, quantity, image_url, image_alt } = item;


  function handleRemove() {
    dispatch(cartDelete(item.id));
  }

  function handleIncrement() {
    if(quantity === 99){ return; }
    dispatch(cartUpdate({...item, quantity: quantity + 1}));
  }

  function handleDecrement() {
    if(quantity === 1){ return; }
    dispatch(cartUpdate({...item, quantity: quantity - 1}));
  }

  return (

    <div className="h-40 flex flex-row gap-5 py-4">

      <div className="flex-shrink-0 w-24 h-32">

        <img
          src={image_url}
          alt={image_alt}
          className="w-full h-full object-center object-cover rounded-md"/>

      </div>

      {/* Name, Price, Quantity */}

      <div className="flex flex-col flex-grow justify-between w-max">

        <h1 className="text-contrast">{name}</h1>
        <h2 className="text-gray-300">£{price * quantity} GBP</h2>

        <div className="flex flex-row justify-between">

          {/* Quantity Counter */}

          <div className="bg-midtone border-gray-700 border-[1px] flex flex-row">

            <button>
              <PlusIcon 
                className="w-10 h-10 p-3 text-contrast"
                onClick={handleIncrement}/>
            </button>

            <span className="p-1 flex justify-center items-center text-sm text-contrast">
              {item.quantity}
            </span>

            <button>
              <MinusIcon 
                className="w-10 h-10 p-3 text-contrast"
                onClick={handleDecrement}/>
            </button>
          </div>

          {/* Trash Icon */}

          <button
            onClick={handleRemove}>
            <TrashIcon className="w-5 h-5 text-contrast hover:text-accent"/>
          </button>
        </div>

      </div>
    </div>
  );
}

export default CartCard;
