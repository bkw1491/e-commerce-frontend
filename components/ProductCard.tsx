import React from "react";
import Link from "next/link";

import { IProduct } from "@interfaces/IProduct";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { cartAdd } from "@store/cart/actions";

type ProductCardProps = {
	product: IProduct;
};

export default function ProductCard(props: ProductCardProps) {
	const dispatch = useAppDispatch();

	const { id, name, price, image_url, image_alt } = props.product;

	function handleAdd(e: React.MouseEvent<HTMLButtonElement>) {
		//html id attribute is type string, must cast
		dispatch(cartAdd({ product_id: Number(e.currentTarget.id), quantity: 1 }));
	}

	return (
		<Link href={`/shop/products/${id}`}>
			<a className="bg-midtone h-[19rem] w-full rounded-md p-1 md:h-[25rem] lg:h-[20rem] xl:h-[25rem]">
				<div className="relative h-3/4 w-full overflow-hidden p-2">
					<button
						className="bg-midtone shadow-midtone absolute top-3 right-3 rounded-full p-2 shadow-md"
						id={id.toString()}
						onClick={handleAdd}
					>
						<ShoppingBagIcon className="text-contrast h-5 w-5" />
					</button>

					{/* Product Image */}

					<div className="flex-shrink-0 object-contain object-center">
						<img src={image_url} alt={image_alt} className="h-full w-full" />
					</div>
				</div>

				{/* Product Name And Pricing */}

				<div className="flex h-1/4 flex-col justify-between px-2 py-1">
					<h2 className="text-contrast text-sm">{name}</h2>

					<h2 className="text-contrast text-sm font-bold">£{price / 100}.00</h2>
				</div>
			</a>
		</Link>
	);
}
