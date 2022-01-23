import Link from 'next/link';
import SlideIn from '@components/SlideIn';

import { Popover } from '@headlessui/react'
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline'
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

      <SlideIn
        appearFrom="left">

        {/* toggles menu closed */}

        <Popover.Button className="p-3">
          <XIcon className="nav-icon"/>
        </Popover.Button>

        {/* nav links */}

        <nav className="mx-5 mt-5 flex flex-col gap-14">

          <Link href="/category/new%in">
            <a className="nav-link">
              <p> 
                New In 
              </p>
            </a>
          </Link>

          <Link href="/category/women">
            <a className="nav-link">
              Women
            </a>
          </Link>
          
          <Link href="/category/men">
            <a className="nav-link">
              Men
            </a>
          </Link>

          <Link href="/category/accessories">
            <a className="nav-link">
              Accessories
            </a>
          </Link>

          {/* conditional on auth state */}

          {authed ? <a className="nav-link" onClick={handleLogout}>Logout</a>
                  : <Link href={`/user/login`}>
                      <a className="nav-link">Login</a>
                    </Link>}        
        </nav>
      </SlideIn>
    </Popover>
  )
}
