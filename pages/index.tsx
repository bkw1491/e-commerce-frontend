import Link from 'next/link';
import Image from 'next/image';
import LayeredWaves from '@resources/layered-waves.png'
import LandingImage from '@resources/landing-image-desktop.jpg';
import BrowseNewIn from '@resources/browse-newin.jpg';
import BrowseWomen from '@resources/browse-women.jpg';
import BrowseMen from '@resources/browse-men.jpg';
import BrowseAcc from '@resources/browse-accessories.jpg';


const quickLinks = [
  {name: "New In", img: BrowseNewIn.src, alt: "browse new in"},
  {name: "Women", img: BrowseWomen.src, alt: "browse women"},
  {name: "Men", img: BrowseMen.src, alt: "browse men"},
  {name: "Accessories", img: BrowseAcc.src, alt: "browse accessories"}
]


export default function Home() {

  return (
    <main>
      <section className="flex justify-center relative top-24 h-[32rem]">

        {/* Mobile Layout */}

        <figure className="flex-shrink-0 overflow-hidden">

          <Image 
            src={LandingImage.src}
            alt='women doing pushups'
            layout='fill'
            objectPosition="center"
            objectFit="cover"/>
        </figure>

        <section className="absolute top-44 left-16 lg:top-10 bg-midtone bg-opacity-20 lg:h-[25rem] lg:px-10">

          <h2 className="text-2xl text-contrast font-semibold my-2 lg:my-6 mx-5 lg:mx-0">
            Redefine
          </h2>
      
        </section>

        <section className="absolute bottom-56 right-20 lg:top-10 bg-midtone bg-opacity-20 lg:h-[25rem] lg:px-10">

          <h2 className="text-2xl text-contrast font-semibold my-2 lg:my-6 mx-5 lg:mx-0">
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

      <section className="relative top-32 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-2">

        {quickLinks.map(link => {
          return (

            <Link key={link.name} 
                  href={`/category/${link.name.toLowerCase()}`}>
              <a className="relative w-full h-72">
                <Image
                  src={link.img}
                  alt={link.alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"/>
                <h3 className="relative top-[calc(50%-1rem)] text-contrast text-3xl text-center font-semibold">{link.name}</h3>
              </a>
            </Link>

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


