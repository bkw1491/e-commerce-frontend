import Image from 'next/image';
import Link from 'next/link';
import logo from '@resources/logo.jpg';
import Sidebar from './Sidebar';
import Cart from './Cart';

import { GiftIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import { useAppSelector } from '@hooks/useAppSelector';

export default function Navbar() {
  //this custom hook is pre-typed
  //ui shows profile logo or orders logo depending on state
  const { authed } = useAppSelector(state => state.auth)

  return (
    <>
      <nav className="bg-white w-full h-24">

        {/* Promo Banner */}

        <h2 className="h-[30%] bg-accent_1 text-white text-center">
          Free shipping on orders over £50
        </h2>

        <div className="h-[70%] flex flex-row items-center justify-between w-full">

          {/* Menu And Search */}

          <div className="ml-3 flex flex-row gap-5">

            {/* Sidebar Component Is Popover */}

            <Sidebar/>
            <SearchIcon className="nav-icon"/>
          </div>

          {/* Logo */}

          <Link href="/">
            <a className="w-12 h-12 relative cursor-pointer">
              <Image 
                src={logo.src}
                alt="logo"
                objectFit='cover'
                layout="fill"
                className="rounded-full"/>
            </a>
          </Link>

          {/* Account And Shopping Bag */}

          <div className="flex flex-row gap-5">

            {/* Conditional On Auth State */}

            {authed ? <GiftIcon className="nav-icon"/> 
                    : <UserIcon className="nav-icon"/>}

            {/* Cart Component Popover Button Is The Bag Icon With Badge */}
            <Cart/>

          </div>
        </div>
      </nav>

      {/* Bottom Menus, 768px MQ */}

      <nav className="hidden md:block md:w-full md:h-10 bg-white">

        <div className="flex flex-row justify-evenly">

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
        </div>
      </nav>
    </>
  )
}