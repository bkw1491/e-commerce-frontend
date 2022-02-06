import Link from "next/link";
import SlideIn from "@components/SlideIn";

import { Popover, Tab } from "@headlessui/react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import { useAppSelector } from "@hooks/useAppSelector";
import { useState } from "react";
import { classNames } from "@utils/classNames";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { userLogout } from "@store/auth/actions";

//obj represents nav heirarchy for sidebar
const nav = [
	{
		name: "Men",
		categories: [
			{ name: "New In", href: "/shop/Men/New In" },
			{ name: "T-Shirts", href: "/shop/Men/T-Shirts" },
			{ name: "Hoodies", href: "/shop/Men/Hoodies" },
			{ name: "Shorts", href: "/shop/Men/Shorts" },
			{ name: "Browse All", href: "/shop/Men" }
		]
	},
	{
		name: "Women",
		categories: [
			{ name: "New In", href: "/shop/Women/New In" },
			{ name: "T-Shirts", href: "/shop/Women/T-Shirts" },
			{ name: "Crop Tops", href: "/shop/Women/Crop Tops" },
			{ name: "Hoodies", href: "/shop/Women/Hoodies" },
			{ name: "Leggings", href: "/shop/Women/Leggings" },
			{ name: "Shorts", href: "/shop/Women/Shorts" },
			{ name: "Browse All", href: "/shop/Women" }
		]
	},
	{
		name: "Accessories",
		categories: [
			{ name: "Resistance Bands", href: "/shop/Accessories/Resistance Bands" },
			{ name: "Shakers", href: "/shop/Shakers" },
			{ name: "Browse All", href: "/shop/Accessories" }
		]
	}
];

export default function Sidebar() {
	//pre-typed, ui shows login or my orders depending on state
	const { authed } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	//local state to programatically close SlideIn
	const [open, setOpen] = useState(false);

	function handleToggle() {
		setOpen(!open);
	}

	function handleLogout() {
		dispatch(userLogout());
		handleToggle();
	}

	return (
		<Popover>
			{/* opens menu */}

			<Popover.Button>
				<MenuAlt2Icon className="nav-icon" onClick={handleToggle} />
			</Popover.Button>

			<SlideIn open={open} appearFrom="left">
				<Popover.Button>
					<XIcon className="nav-icon" onClick={handleToggle} />
				</Popover.Button>

				<div className="flex flex-col justify-between border-b-[1px] border-b-gray-500">
					<Tab.Group>
						<Tab.List className="flex justify-between border-b-[1px] border-b-gray-500">
							{nav.map(node => (
								<Tab
									key={node.name}
									className={({ selected }) =>
										classNames(
											selected
												? "border-accent text-accent"
												: "text-contrast border-transparent",
											"border-b-2 py-4 px-1 text-base font-medium"
										)
									}
								>
									{node.name}
								</Tab>
							))}
						</Tab.List>

						<Tab.Panels>
							{nav.map(node => (
								<Tab.Panel key={node.name}>
									<ul>
										{node.categories.map(ctgy => (
											<li key={ctgy.name} onClick={handleToggle}>
												<Link href={ctgy.href}>
													<a className="nav-link py-8">{ctgy.name}</a>
												</Link>
											</li>
										))}
									</ul>
								</Tab.Panel>
							))}
						</Tab.Panels>
					</Tab.Group>
				</div>

				<Link href={authed ? "/" : "/user/login"}>
					<a className="nav-link py-8" onClick={handleLogout}>
						{authed ? "Logout" : "Login"}
					</a>
				</Link>
			</SlideIn>
		</Popover>
	);
}
