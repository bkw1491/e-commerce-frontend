import Link from 'next/link';

import { Popover, Transition } from '@headlessui/react'
import { ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react';
import { useAppSelector } from '@hooks/useAppSelector';

export default function Cart() {
  //this custom hook is pre-typed
  //ui needs to map cart items and show cart count on logo
  const { cart } = useAppSelector(state => state.cart)

  return (

    <Popover>

      {/* Toggles Menu Open */}

      <Popover.Button>
        <div className="flex flex-row">

          <ShoppingBagIcon className="nav-icon"/>
          <div className="cursor-pointer relative top-2 right-4 
            bg-accent_1 rounded-full text-xs text-white my-[0.4rem] px-[0.3rem]">

            {/* Badge Displays Items Count */}

            {cart.length}
          </div>

        </div>
      </Popover.Button>

      <Transition>

        {/* Whole Component Fades In */}

        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">


          <Popover.Panel className="absolute inset-0 w-full h-screen bg-white bg-opacity-70 z-50">

            {/* Opaque Menu Slides In From Left */}
            
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-500 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full">

              <div className="bg-white w-3/4 fixed top-0 right-0 h-screen">

                {/* Toggles Menu Closed */}

                <Popover.Button className="p-3">
                  <XIcon className="nav-icon"/>
                </Popover.Button>

                
              </div>
            </Transition.Child>
          </Popover.Panel>
        </Transition.Child>
      </Transition>     
    </Popover>
  )
}