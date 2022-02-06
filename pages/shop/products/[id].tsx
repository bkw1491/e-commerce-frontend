import React from "react";
import Accordian from "@components/Accordian";
import Incrementer from "@components/Incrementer";

import { useState } from "react";
import { ShopAPI } from "@api/shop";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { cartAdd } from "@store/cart/actions";

//tell next how many pages it has to pre-render
export async function getStaticPaths() {
	const { data, error } = await ShopAPI.getAll();
	//don't want to build if can't get products
	if (error) {
		throw new Error(error);
	}

	const paths = data.map(product => {
		return { params: { id: product.id.toString() } };
	});

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps(context: GetStaticPropsContext) {
	//params shouldn't be undef- throw in getStaticPaths
	//need type assertion for typescript to compile

	const id = context.params!.id as string;

	const { data, error } = await ShopAPI.getByID(id);
	//just throw error, don't want app to build with no products
	if (error) {
		throw new Error(error);
	}
	//next expects return to be in this format
	return { props: { product: data } };
}

export default function Product(
	props: InferGetStaticPropsType<typeof getStaticProps>
) {
	const { id, name, descr, price, image_url, image_alt } = props.product;
	//pre-typed dispatch hook
	const dispatch = useAppDispatch();
	const [qty, setQty] = useState(1);

	function handleAddToBag(e: React.MouseEvent<HTMLButtonElement>) {
		//stop page refresh
		e.preventDefault();
		dispatch(cartAdd({ product_id: id, quantity: qty }));
	}

	function handleIncrement() {
		if (qty === 99) return;
		setQty(qty + 1);
	}

	function handleDecrement() {
		if (qty === 1) return;
		setQty(qty - 1);
	}

	return (
		<div className="relative top-24 p-5">
			{/* adapted from https://tailwindui.com/components/ecommerce/components/product-overviews  */}

			<div className="flex-row lg:flex">
				{/* product image */}

				<div className="h-[calc(100vh-24rem)] overflow-hidden rounded-md md:m-8 lg:h-[calc(100vh-14rem)] lg:min-w-fit">
					<img
						src={image_url}
						alt={image_alt}
						className="h-full w-full object-cover object-center"
					/>
				</div>

				{/* Product info */}
				<div className="mt-10 md:space-y-6 md:px-10">
					<h1 className="text-contrast text-2xl font-extrabold tracking-tight sm:text-3xl">
						{name}
					</h1>

					{/* options */}
					<div className="mt-4 md:max-w-lg">
						<p className="text-contrast text-3xl">£{price / 100}.00</p>

						<div className="mt-5 flex flex-row items-center gap-5">
							<Incrementer
								increment={handleIncrement}
								decrement={handleDecrement}
								counter={qty}
							/>

							<button
								type="submit"
								onClick={handleAddToBag}
								className="bg-accent text-contrast flex w-full max-w-sm items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium"
							>
								Add to bag
							</button>
						</div>
					</div>

					<div className="pt-5">
						{/* description */}

						<div className="hidden space-y-8 lg:block">
							<h2 className="text-contrast text-xl">Product Description</h2>
							<p className="text-sm text-gray-300">{descr}</p>
							<h2 className="text-contrast text-xl">Delivery</h2>
							<p className="text-sm text-gray-300">
								UK and EU orders typically arrive within 5 working days. Orders
								outside of these regions can take 10 days or more.
							</p>
							<h2 className="text-contrast text-xl">Returns Policy</h2>
							<p className="text-sm text-gray-300">
								Free returns on all orders within 30 days.
							</p>
						</div>

						<div className="lg:hidden">
							<Accordian
								accordians={[
									{ title: "Product Description", descr },
									{
										title: "Delivery",
										descr:
											"UK and EU orders typically arrive within 5 working days. Orders outside of these regions can take 10 days or more."
									},
									{
										title: "Refund Policy",
										descr: "Free returns on all orders within 30 days."
									}
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
