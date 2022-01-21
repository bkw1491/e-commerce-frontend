import Card from "@components/Card";

import { ProductAPI } from "@api/product.api";
import { IProduct } from "@interfaces/IProduct";
import { ShoppingBagIcon } from "@heroicons/react/outline";


export async function getStaticProps() {

  const { data, error } = await ProductAPI.getAll();
  //getStaticProps expects return type obj with props
  if(error) { return {props: { products: []}} }
  //??revalidate in case new productsa are added
  return {
    props: { products: data }
  }
}

export default function Products({ products }: {products: IProduct[]}) {
  return (
    
    <div className="w-full">
      
      <section className="bg-gray-50 h-24 flex items-center justify-center">
        <h1 className="text-center text-xl font-semibold">All Products</h1>
      </section>

      <section className="md:h-full flex flex-wrap items-center justify-center gap-3">

        {products.map(product => {
          return (

            <Card
              key={product.id}>
                
                
                {/* Product Image */}

                <div className="relative h-2/3 w-full p-1">

                  <div className="absolute top-3 right-3 bg-white rounded-full shadow-md p-2">
                    <ShoppingBagIcon className="w-5 h-5"/>
                  </div>

                  <img
                    src={product.image_url}
                    alt={product.image_alt}/>


                </div>

                {/* Product Name And Pricing */}

                <div className="h-1/3 flex flex-col justify-evenly p-2">

                  <h2 className="text-sm text-gray-700">
                    {product.name}
                  </h2>
      
                  <h2>£{product.price}</h2>

                </div>
             

            </Card>

          )
        })}

      </section>

    </div>
  );
}
