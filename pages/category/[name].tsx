import ProductCard from "@components/ProductCard";

import { CategoryAPI } from "@api/category.api";;
import { ProductAPI } from "@api/product.api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export async function getStaticProps(context: GetStaticPropsContext) {
  //TODO
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

export default function ProductsByCategory({ products, category }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div className="relative bg-darkest top-24 w-full lg:px-6 xl:px-8">
      
      <section className="text-contrast h-24 lg:h-44 flex items-center justify-center">
        <h1 className="text-center text-xl font-semibold">
          {(category as string).toUpperCase()}
        </h1>
      </section>

      <section className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:gap-8">

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
