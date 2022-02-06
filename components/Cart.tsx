import CartCard from "./CartCard";
import SlideIn from "@components/SlideIn";

import { Popover } from "@headlessui/react";
import { ShoppingBagIcon, XIcon } from "@heroicons/react/outline";
import { useAppSelector } from "@hooks/useAppSelector";
import { useState } from "react";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { cartCheckout } from "@store/cart/actions";

export default function Cart() {
	//this custom hook is pre-typed
	//ui needs to map cart items and show cart count on logo
	const dispatch = useAppDispatch();
	const { cart } = useAppSelector(state => state.cart);
	//local state to programatically close SlideIn
	const [open, setOpen] = useState(false);

	function handleToggle() {
		setOpen(!open);
	}

	function handleCheckout() {
		if (cart?.length === 0) return;
		dispatch(cartCheckout());
	}

	return (
		<Popover>
			{/* toggles menu open */}

			<Popover.Button>
				<div className="flex flex-row" onClick={handleToggle}>
					<ShoppingBagIcon className="nav-icon" />
					<div
						className="bg-accent text-contrast relative top-2 
            right-4 my-[0.4rem] cursor-pointer rounded-full px-[0.3rem] text-xs"
					>
						{cart.length}
					</div>
				</div>
			</Popover.Button>

			<SlideIn open={open} appearFrom="right">
				{/* Toggles Menu Closed */}

				<div className="flex flex-grow flex-row justify-between border-b-[1px] py-3">
					<h1 className="text-contrast text-sm">Your Bag</h1>
					<Popover.Button>
						<XIcon className="nav-icon" onClick={handleToggle} />
					</Popover.Button>
				</div>

				{/* Items */}

				{cart.length > 0 ? (
					<ul className="divide-contrast space-y-8 divide-y">
						{cart.map(item => {
							return (
								<li key={item.id}>
									<CartCard item={item} />
								</li>
							);
						})}
					</ul>
				) : (
					<h2 className="text-contrast py-5 text-2xl">
						Your bag is currenty empty
					</h2>
				)}

				{/* total and cta btns */}

				<div className="flex flex-col gap-5">
					<div className="flex flex-row justify-between border-b-[1px] py-3">
						<h2 className="text-contrast text-xl">Total</h2>
						<span className="text-contrast text-xl font-semibold">
							£
							{cart.reduce(
								(total, prev) => total + (prev.price * prev.quantity) / 100,
								0
							)}
						</span>
					</div>

					<button
						className="btn-base bg-accent min-w-full"
						onClick={() => handleCheckout()}
					>
						Checkout
					</button>

					<span className="text-contrast text-center">
						{"Or "}
						<a className="text-accent" onClick={handleToggle}>
							Continue Shopping
						</a>
					</span>
				</div>
			</SlideIn>
		</Popover>
	);
}
