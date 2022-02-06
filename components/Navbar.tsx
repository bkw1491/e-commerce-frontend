import Image from "next/image";
import Link from "next/link";
import logo from "@resources/logo.jpg";
import Sidebar from "./Sidebar";
import Cart from "./Cart";

import { SearchIcon, UserIcon } from "@heroicons/react/outline";
import { useAppSelector } from "@hooks/useAppSelector";

export default function Navbar() {
	const { authed } = useAppSelector(state => state.auth);

	return (
		<>
			<nav className="bg-midtone fixed z-40 h-24 w-full">
				{/* Promo Banner */}

				<h2 className="bg-accent text-contrast h-[30%] text-center">
					Free shipping on orders over £50
				</h2>

				<div className="grid h-[70%] w-full grid-cols-4 items-center justify-center xl:px-32">
					{/* Menu And Search */}

					<div className="col-start-1 ml-3 flex flex-row gap-5">
						<Sidebar />
						<Link href="/shop/products/search">
							<a>
								<SearchIcon className="nav-icon" />
							</a>
						</Link>
					</div>

					{/* logo */}

					<Link href="/">
						<a className="relative col-start-2 col-end-4 h-12 w-12 cursor-pointer justify-self-center">
							<Image
								src={logo.src}
								alt="logo"
								objectFit="cover"
								layout="fill"
							/>
						</a>
					</Link>

					{/* Account And Shopping Bag */}

					<div className="col-start-4 flex flex-row gap-5 justify-self-end">
						{authed && <UserIcon className="nav-icon" />}

						{/* Cart Component Popover Button Is The Bag Icon With Badge */}
						<Cart />
					</div>
				</div>
			</nav>
		</>
	);
}
