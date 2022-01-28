import ProductCard from "@components/ProductCard";

import { CategoryAPI } from "@api/category.api";;
import { ProductAPI } from "@api/product.api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export async function getStaticProps(context: GetStaticPropsContext) {
  //@ts-ignore
  const { data, error } = await ProductAPI.getByCategory(context.params.name);

  if(!error) { 
    return { props: { products: data, category: context.params!.name } }
  }

  return { props: { products: [] } }
}

export async function getStaticPaths() {

  const { data, error } = await CategoryAPI.getAll();
  //tell next how many paths it needs to generate
  const paths = data.map(category => {
    return { params: {name: category.name}}
  });
  //fallback false = show 404
  return {
    paths,
    fallback: false
  }
}

export default function ProductsByCategory({ products }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div className="relative bg-darkest top-24 md:top-[8.5rem] w-full">
      
      <section className="text-contrast h-24 flex items-center justify-center">
        <h1 className="text-center text-xl font-semibold">
          Products
        </h1>
      </section>

      <section className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">

        {products.map(product => {
          return (

            <ProductCard
              key={product.id}
              product={product}/>

          )
        })}

      </section>

    </div>
  )
}
