import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@components/ProductCard';
import LayeredWaves from '@resources/layered-waves.png'
import LandingImage from '@resources/landing-image-desktop.jpg';
import TwitterLogo from '@resources/twitter-logo.png';
import FacebookLogo from '@resources/fb-logo.png';
import InstaLogo from '@resources/insta-logo.png';
import RedditLogo from '@resources/reddit-logo.png';

import { InferGetStaticPropsType } from 'next';
import { ProductAPI } from '@api/product.api';

export async function getStaticProps() {
  const { error, data } = await ProductAPI.getByCategory("new in");
  if(!error) {return {props: {newIn: data}}}
  { return {props: {newIn: []}}}
}


export default function Home({ newIn }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <main>
      <section className="flex justify-center relative top-24 h-[32rem]">

        {/* Mobile Layout */}

        <figure className="flex-shrink-1 overflow-hidden ">

          <Image 
            src={LandingImage.src}
            alt='man standing on cliff edge'
            layout='fill'
            objectPosition="center"
            objectFit="cover"/>
        </figure>

        <section className="absolute top-44 left-16 lg:top-10 bg-midtone bg-opacity-20 lg:h-[25rem] lg:px-10">

          <h2 className="text-2xl text-contrast my-2 lg:my-6 mx-5 lg:mx-0">
            Redefine
          </h2>
      
        </section>

        <section className="absolute bottom-56 right-20 lg:top-10 bg-midtone bg-opacity-20 lg:h-[25rem] lg:px-10">

          <h2 className="text-2xl text-contrast my-2 lg:my-6 mx-5 lg:mx-0">
            Your Limits
          </h2>
      
        </section>

        <figure className="absolute w-full h-60 -bottom-1 flex-shrink-1">

          <Image 
            src={LayeredWaves.src}
            alt='man standing on cliff edge'
            layout='fill'
            objectPosition="center"
            objectFit="fill"/>
          </figure>
      </section>

      <section className="relative top-20 lg:top-40">

        <h3 className="text-xl lg:text-2xl font-semibold py-4 lg:py-6 text-center text-contrast">
          SERIOUS GEAR, FOR SERIOUS ATHLETES</h3>

        <p className="text-center text-contrast lg:text-md py-4 lg:py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit!
        </p>

        <div className="flex flex-row items-center justify-evenly pt-4">

          <Link href="/category/women">
            <a className="h-12 w-40 flex justify-center items-center  text-contrast rounded-md font-semibold bg-accent">
              SHOP WOMEN
            </a>
          </Link>

          <Link href="/category/men">
            <a className="h-12 w-40 flex justify-center items-center rounded-md text-contrast font-semibold bg-accent">
              SHOP MEN
            </a>
          </Link>
        </div>
      </section>

      <section className="relative top-28 py-5">
        <h1 className="text-center text-contrast text-xl font-semibold">
          New In
        </h1>
      </section>

      <section className="relative top-28 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">

        {newIn.map(product => {
          return (

            <ProductCard
              key={product.id}
              product={product}/>

          )
        })}

      </section>

      <footer className="relative top-40 pb-5 px-5">

        <div className="border-t-[1px] border-t-contrast">
          <p className="text-sm text-contrast text-center">&#169; 2022 | Warrior Athletics | Redefine Your Limits</p>
        </div>

      </footer>
    </main>

  )
}


