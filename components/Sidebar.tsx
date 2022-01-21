import Link from 'next/link';

import { Popover, Transition } from '@headlessui/react'
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { userLogout } from '@store/auth/actions';

export default function Sidebar() {
  //custom hooks are pre-typed
  //ui shows login or my orders depending on state
  const { authed } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(userLogout());
  }

  return (

    <Popover>

      {/* Toggles Menu Open */}

      <Popover.Button>
        <MenuAlt2Icon className="nav-icon"/>
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


          <Popover.Panel className="absolute top-0 left-0 w-full h-screen bg-white bg-opacity-70 z-50">

            {/* Opaque Menu Slides In From Right */}

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-500 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">

              <div className="bg-white w-3/4 h-screen">

                {/* Toggles Menu Closed */}

                <Popover.Button className="p-3">
                  <XIcon className="nav-icon"/>
                </Popover.Button>

                {/* Nav Links */}

                <nav className="mx-5 mt-5 flex flex-col gap-14">

                  <Link href="/">
                    <a className="nav-link">
                      <p> 
                        New In 
                      </p>
                    </a>
                  </Link>

                  <Link href="/">
                    <a className="nav-link">
                      Women
                    </a>
                  </Link>
                  
                  <Link href="/">
                    <a className="nav-link">
                      Men
                    </a>
                  </Link>

                  <Link href="/">
                    <a className="nav-link">
                      Accessories
                    </a>
                  </Link>

                  {/* Conditional Based On Auth State */}

                  {authed ? <a className="nav-link" onClick={handleLogout}>Logout</a>
                          : <Link href={`/user/login`}>
                              <a className="nav-link">Login</a>
                            </Link>}        
                </nav>
              </div>
            </Transition.Child>
          </Popover.Panel>
        </Transition.Child>
      </Transition>     
    </Popover>
  )
}
