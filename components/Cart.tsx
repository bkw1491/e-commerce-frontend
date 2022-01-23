import CartCard from './CartCard';
import SlideIn from '@components/SlideIn';

import { Popover } from '@headlessui/react'
import { ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { useAppSelector } from '@hooks/useAppSelector';
import { useState } from 'react';

export default function Cart() {
  //this custom hook is pre-typed
  //ui needs to map cart items and show cart count on logo
  const { cart } = useAppSelector(state => state.cart);
  //local state to programatically close SlideIn
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (

    <Popover>

      {/* Toggles Menu Open */}

      <Popover.Button>
        <div className="flex flex-row" onClick={handleToggle}>

          <ShoppingBagIcon className="nav-icon"/>
          <div className="cursor-pointer relative top-2 right-4 
            bg-accent_1 rounded-full text-xs text-white my-[0.4rem] px-[0.3rem]">
            {cart.length}          
          </div>

        </div>
      </Popover.Button>

      <SlideIn
        open={open}
        appearFrom="right">

        {/* Toggles Menu Closed */}

        <div className="flex flex-row flex-grow justify-between border-b-[1px] py-3">

          <h1 className="text-sm">Your Bag</h1>
          <Popover.Button>
            <XIcon className="nav-icon" onClick={handleToggle}/>
          </Popover.Button>
        </div>


        {/* Items */}

        {cart.length > 0 

          ? <ul className="divide-y divide-gray-200">
            
              {cart.map(item => {
                return (

                  <li key={item.id}>
                    <CartCard item={item}/>
                  </li>

                )
              })}
            </ul>

          : <h2 className="py-5 text-2xl">
              Your bag is currenty empty
            </h2>           
        }

        {/* Total And CTA Buttons */}

        <div className="flex flex-col gap-5">

          <div className="flex flex-row justify-between py-3 border-b-[1px]">
            <h2 className="text-xl">Total</h2>
            <span className="text-xl font-semibold">
              £{cart.reduce((total, item) => total + item.price, 0)}
            </span>
          </div>

          <button className="btn-base min-w-full bg-accent_1 hover:bg-accent_1_hover">
            Checkout
          </button>

          <span className="text-center">
            {"Or "} 
            <a 
              className="text-accent_1 hover:text-accent_1_hover"
              onClick={handleToggle}>
              Continue Shopping
            </a>
          </span>
        </div>       
      </SlideIn>      
    </Popover>
  )
}