import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react';

type FlyoutProps = {
  appearFrom: "left" | "right"
  children: React.ReactNode
}

function SlideIn({ appearFrom, children }: FlyoutProps) {

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

          {/* position depends on appearFrom */}

          <Popover.Panel className={`absolute top-0 ${appearFrom === "right" ? "right-0" : "left-0"} w-full min-h-screen overflow-y-scroll bg-white bg-opacity-70 z-50`}>

            {/* opaque section slides in appearFrom side */}

            <Transition.Child
              as={Fragment}
              enter="transition duration-500 transform"
              enterFrom={appearFrom === "left" 
                ? "-translate-x-full"
                : "translate-x-full"}
              enterTo="translate-x-0"
              leave="transition duration-500 transform"
              leaveFrom="translate-x-0"
              leaveTo={appearFrom === "left" 
                ? "-translate-x-full"
                : "translate-x-full"}>

                  
              <div className={`bg-white w-3/4 md:w-1/2 absolute top-0 ${appearFrom === "right" ? "right-0" : "left-0"} min-h-screen p-3`}>

                {children}

              </div>
            </Transition.Child>
          </Popover.Panel>
        </Transition.Child>
      </Transition> 
  );
}

export default SlideIn
