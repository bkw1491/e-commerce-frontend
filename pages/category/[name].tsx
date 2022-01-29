import ProductCard from "@components/ProductCard";

import { CategoryAPI } from "@api/category.api";;
import { ProductAPI } from "@api/product.api";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export async function getStaticProps(context: GetStaticPropsContext) {
  //context.params should't be undef since we throw if can't getStaticPaths
  const { data, error } = 
    await ProductAPI.getByCategory(context.params!.name as string);
  //don't want app to build if there's error getting this data
  if(error) { throw new Error(error) }
  //next expects obj returned in this format, can't simplify
  return { props: { products: data, category: context.params!.name } }
}

export async function getStaticPaths() {

  const { data, error } = await CategoryAPI.getAll();
  //this runs at build, don't want to build if can't get this data
  if(error) { throw new Error(error); }
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
