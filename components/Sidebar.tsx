import Link from 'next/link';
import SlideIn from '@components/SlideIn';

import { Popover } from '@headlessui/react'
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline'
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { userLogout } from '@store/auth/actions';
import { useState } from 'react';

//obj represents nav heirarchy for sidebar
const nav = [
  {key: "new", name: "New In", href: "/category/new-in"},
  {key: "men", name: "Men", href: "/category/men"},
  {key: "women", name: "Women", href: "/category/women"},
  {key: "access", name: "Accessories", href: "/category/accessories"}
]

export default function Sidebar() {
  //pre-typed, ui shows login or my orders depending on state
  const { authed } = useAppSelector(state => state.auth)
  //local state to programatically close SlideIn
  const [open, setOpen] = useState(false);
  //need to dispatch logout event
  //?? using jwt so surely a logout is pointless??
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(userLogout());
  }

  function handleToggle() {
    setOpen(!open)
  }

  return (

    <Popover>

      {/* opens menu */}

      <Popover.Button>
        <MenuAlt2Icon className="nav-icon" onClick={handleToggle}/>
      </Popover.Button>

      <SlideIn
        open={open}
        appearFrom="left">

        {/* nav links */}

        <ul className="divide-y pr-20">

          {/* closes menu */}

          <li className="pb-10">
            <Popover.Button>
              <XIcon className="nav-icon" onClick={handleToggle}/>
            </Popover.Button>
          </li>

          {nav.map(node => {
            return (
              <li 
                key={node.key} 
                onClick={handleToggle}>

                <Link href={node.href}>
                  <a className="nav-link">{node.name}</a>
                </Link>

              </li>
            )
          })}

          {/* conditional on auth state */}

          {authed ? <a className="nav-link" onClick={handleLogout}>Logout</a>
                  : <Link href={`/user/login`}>
                      <a className="nav-link">Login</a>
                    </Link>}        
        </ul>
      </SlideIn>
    </Popover>
  )
}
