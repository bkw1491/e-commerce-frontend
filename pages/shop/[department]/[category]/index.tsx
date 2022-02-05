/**
 * page for products by category
 */

import ProductCard from "@components/ProductCard";

import { ShopAPI } from "@api/shop";
import { useRouter } from "next/router";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export async function getStaticPaths() {
	const { data, error } = await ShopAPI.listCategories();
	const departments = ShopAPI.listDepartments();
	//this runs at build, don't want to build if can't get this data
	if (error) {
		throw new Error(error);
	}
	//tell next how many paths it needs to generate
	let paths: {}[] = [];

	departments.forEach(department => {
		data.forEach(category => {
			paths.push({ params: { department, category: category.name } });
		});
	});
	//fallback false = show 404
	return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
	//params shouldn't be undef- throw in getStaticPaths
	//need type assertion for typescript to compile
	const department = context.params!.department as string;
	const category = context.params!.category as string;

	const { data, error } = await ShopAPI.getByCategory(department, category);
	//don't want app to build if there's error getting this data
	if (error) {
		throw new Error(error);
	}
	//next expects obj returned in this format, can't simplify
	return { props: { products: data } };
}

export default function ProductsByCategory({
	products
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();
	const { department, category } = router.query;

	return (
		<div className="bg-darkest relative top-24 w-full lg:px-6 xl:px-8">
			<section className="text-contrast flex h-24 items-center justify-center lg:h-44">
				<h1 className="text-center text-xl font-semibold">
					{`${department}'s ${category}`}
				</h1>
			</section>

			<section className="grid grid-cols-2 gap-2 px-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 xl:grid-cols-6 xl:gap-8">
				{products.map(product => {
					return <ProductCard key={product.id} product={product} />;
				})}
			</section>
		</div>
	);
}
