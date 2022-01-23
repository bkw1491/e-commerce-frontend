import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react';

type FlyoutProps = {
  direction: "left" | "right"
  children: React.ReactNode
}

function SlideIn({ direction, children }: FlyoutProps) {

  return (

    <Transition>

        {/* whole component fades in */}

        <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">

          {/* position depends on anchor prop */}

          <Popover.Panel className={`absolute top-0 ${direction}-0 w-full min-h-screen bg-white bg-opacity-70 z-50`}>

            {/* opaque section slides in from anchor direction */}

            <Transition.Child
              as={Fragment}
              enter="transition duration-500 transform"
              enterFrom={direction === "right" 
                ? "-translate-x-full"
                : "translate-x-full"}
              enterTo="translate-x-0"
              leave="transition duration-500 transform"
              leaveFrom="translate-x-0"
              leaveTo={direction === "right" 
                ? "-translate-x-full"
                : "translate-x-full"}>

                {children}

            </Transition.Child>
          </Popover.Panel>
        </Transition.Child>
      </Transition> 
  );
}

export default SlideIn
