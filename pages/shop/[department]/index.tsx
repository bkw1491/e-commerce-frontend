/**
 * page for products by department
 */

import ProductCard from "@components/ProductCard";

import { ShopAPI } from "@api/shop";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

//tell next how many pages to pre-render
//needs to be async for next to recognise
export async function getStaticPaths() {
	const departments = ShopAPI.listDepartments();
	//tell next how many paths it needs to generate
	const paths = departments.map(department => {
		return { params: { department } };
	});
	//fallback false = show 404
	return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
	//params hard code, should never be undef
	//need type assertion for typescript to compile
	const path = context.params!.department as string;

	const { data, error } = await ShopAPI.getByDepartment(path);
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
	const { department } = router.query;

	return (
		<div className="bg-darkest relative top-24 w-full lg:px-6 xl:px-8">
			<section className="text-contrast flex h-24 items-center justify-center lg:h-44">
				<h1 className="text-center text-xl font-semibold">{department}</h1>
			</section>

			<section className="grid grid-cols-2 gap-2 px-1 md:grid-cols-3 md:px-5 lg:grid-cols-5 lg:gap-6 xl:grid-cols-6 xl:gap-10">
				{products.map(product => {
					return <ProductCard key={product.id} product={product} />;
				})}
			</section>
		</div>
	);
}
