import React from "react";
import ProductCard from "@components/ProductCard";

import { useState } from "react";
import { ShopAPI } from "@api/shop";
import { IProduct } from "@interfaces/IProduct";
import { useDebounce } from "@hooks/useDebounce";

export default function ProductsByName() {
	const [results, setResults] = useState([] as IProduct[]);

	const handleSearch = useDebounce<React.ChangeEvent<HTMLInputElement>>(
		async e => {
			const search = e.target.value;
			if (search.length < 3) {
				setResults([]);
				return;
			}
			const { data, error } = await ShopAPI.searchByName(search);
			if (!error) setResults(data);
		},
		400
	);

	return (
		<div className="bg-darkest relative top-24 w-full lg:px-6 xl:px-8">
			<form className="text-contrast flex h-24 w-full lg:h-44">
				<input
					name="search"
					type="text"
					onChange={handleSearch}
					placeholder="Search by Typing Keywords..."
					className="focus:ring-accent_1_hover focus:border-accent bg-darkest text-contrast relative mb-2 block w-full appearance-none px-5 placeholder-gray-500 focus:outline-none sm:text-sm"
				/>
			</form>

			<section className="grid grid-cols-2 gap-2 px-1 md:grid-cols-3 md:px-5 lg:grid-cols-5 lg:gap-6 xl:grid-cols-6 xl:gap-10">
				{results.map(product => {
					return <ProductCard key={product.id} product={product} />;
				})}
			</section>
		</div>
	);
}
