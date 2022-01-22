import Link from 'next/link';
import Image from 'next/image';
import LandingImage from '@resources/landing-image.jpg'
import LandingImage2 from '@resources/landing-image-2.jpg'
import LandingImage3 from '@resources/landing-image-3.jpg'


export default function Home() {

  return (

    <main className="bg-white relative">

      {/* Mobile Layout */}

      <div className="h-screen relative md:hidden">

        <Image 
          src={LandingImage2.src}
          alt='man standing on cliff edge'
          layout='fill'
          objectFit="cover"/>
      </div>

      {/* Desktop Grid Mosaic Layout */}

      <div className="hidden md:grid grid-cols-12 grid-rows-6 md:h-[calc(100vh-8.5rem)] relative bg-gradient-to-b from-gray-50 via-sky-50 to-sky-100">

        {/* Image 1 */}

        <div className="relative col-start-2 col-end-5 row-start-2 row-end-6 z-10">
          
          <Image 
            src={LandingImage.src}
            alt='woman standing on cliff edge'
            layout='fill'
            objectFit="cover"/>

        </div>

        {/* Image 2 */}

        <div className="relative col-start-4 col-end-9 row-start-1 row-end-7 z-0 my-10">

          <Image 
            src={LandingImage2.src}
            alt='man standing on cliff edge'
            layout="fill"
            objectFit="cover"/>

        </div>

        {/* Image 3 */}

        <div className="relative col-start-8 col-end-12 row-start-2 row-end-5">

          <Image 
            src={LandingImage3.src}
            alt='woman climbing rock face'
            layout='fill'
            objectFit="cover"/>

        </div>

        {/* Title */}

        <div className="col-start-3 col-end-10 row-start-3 row-end-5 bg-black bg-opacity-20 flex flex-col justify-evenly z-20">

          <h1 className="col-start-3 col-end-10 row-start-3 text-white text-6xl z-20 tracking-widest font-thin text-center">Made For Individuals</h1>

          <p className="col-start-3 col-end-10 row-start-4 text-white text-2xl text-center font-thin z-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur lorem.
          </p>

        </div>

        {/* CTA Buttons */}

        <div className="col-start-5 col-end-8 row-start-5 flex flex-row justify-evenly items-center z-20">
          <Link href="/products">

            <a className="btn-base bg-accent_1 hover:bg-accent_1_hover">
              Shop Men
            </a>
          </Link>

          <Link href="/products">

            <a className="btn-base bg-accent_2 hover:bg-accent_2_hover text-white">
              Shop Women
            </a>
          </Link>
        </div>



      </div>

      <section className="absolute bottom-0 bg-black bg-opacity-20 md:hidden">

        <div className="flex flex-col gap-8 my-6 ml-4 mr-8">

          {/* Title Hook*/}

          <h1 className="text-white text-2xl font-bold">
            Made For Individuals
          </h1>

          <p className="text-white text-md font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur lorem.
          </p>

          <div className="col-start-5 col-end-8 row-start-5 flex flex-row justify-evenly items-center z-20">

            <Link href="/category/men">

              <a className="btn-base bg-accent_1 hover:bg-accent_1_hover">
                Shop Men
              </a>
            </Link>

            <Link href="/category/women">

              <a className="btn-base bg-accent_2 hover:bg-accent_2_hover text-white">
                Shop Women
              </a>
            </Link>
        </div>
        </div>
      </section>
    </main>
  )
}


