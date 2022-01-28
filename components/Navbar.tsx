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
      <nav className="bg-midtone w-full h-24 fixed z-40">

        {/* Promo Banner */}

        <h2 className="h-[30%] bg-accent text-contrast text-center">
          Free shipping on orders over £50
        </h2>

        <div className="h-[70%] w-full grid grid-cols-4 justify-center items-center lg:px-32">

          {/* Menu And Search */}

          <div className="col-start-1 ml-3 flex flex-row gap-5 lg:hidden">

            <Sidebar/>
            <SearchIcon className="nav-icon"/>
          </div>

          {/* text links, 768px MQ */}

          <div className="hidden col-start-2 col-end-4 lg:flex lg:flex-row items-center justify-between lg:gap-16">

            <Link href="/">
              <a className="nav-link">
                New In 
              </a>
            </Link>

            <Link href="/category/women">
              <a className="nav-link">
                Women
              </a>
            </Link>

            {/* logo */}

            <Link href="/">
              <a className="w-12 h-12 relative cursor-pointer">
                <Image 
                  src={logo.src}
                  alt="logo"
                  objectFit='cover'
                  layout="fill"/>
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

          </div>


          {/* Account And Shopping Bag */}

          <div className="col-start-4 justify-self-end flex flex-row gap-5">

            {/* Conditional On Auth State */}

            {authed ? <GiftIcon className="nav-icon"/> 
                    : <UserIcon className="nav-icon"/>}

            {/* Cart Component Popover Button Is The Bag Icon With Badge */}
            <Cart/>

          </div>

        </div>
      </nav>   
    </>
  )
}