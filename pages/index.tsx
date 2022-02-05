import Link from "next/link";
import Image from "next/image";
import LayeredWaves from "@resources/layered-waves.png";
import LandingImage from "@resources/landing-image-desktop.jpg";
import BrowseNewIn from "@resources/browse-newin.jpg";
import BrowseWomen from "@resources/browse-women.jpg";
import BrowseMen from "@resources/browse-men.jpg";
import BrowseAcc from "@resources/browse-accessories.jpg";

const quickLinks = [
	{
		name: "New In",
		href: "/shop/Women/New In",
		img: BrowseNewIn.src,
		alt: "browse new in"
	},
	{
		name: "Women",
		href: "/shop/Women",
		img: BrowseWomen.src,
		alt: "browse women"
	},
	{ name: "Men", href: "/shop/Men", img: BrowseMen.src, alt: "browse men" },
	{
		name: "Accessories",
		href: "/shop/Accessories",
		img: BrowseAcc.src,
		alt: "browse accessories"
	}
];

export default function Home() {
	return (
		<main>
			<section className="relative top-24 flex h-[28rem] justify-center md:h-[32rem] lg:h-[calc(100vh-6rem)]">
				<figure className="flex-shrink-0 overflow-hidden">
					<Image
						src={LandingImage.src}
						alt="women doing pushups"
						layout="fill"
						objectPosition="center"
						objectFit="cover"
					/>
				</figure>

				<figure className="absolute -bottom-1 h-60 w-full">
					<Image
						src={LayeredWaves.src}
						alt="svg waves"
						layout="fill"
						objectPosition="center"
						objectFit="fill"
					/>
				</figure>
			</section>

			<section className="relative top-20 space-y-5 py-4 px-5 md:top-28 md:px-20 lg:absolute lg:left-10 lg:h-3/4 lg:w-1/3 lg:space-y-10 lg:bg-black/30 lg:px-5 xl:space-y-20">
				<h3 className="text-contrast text-md text-center font-light tracking-widest lg:py-6 lg:text-2xl">
					Redefine Your Limits...
				</h3>

				<h3 className="text-contrast text-center text-2xl font-thin tracking-widest lg:text-6xl">
					Warrior Athletics
				</h3>

				<p className="text-contrast lg:text-md font-light lg:py-6">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
					ipsum, nobis repudiandae voluptates ut quibusdam quaerat. Aut
				</p>

				<div className="flex flex-row items-center justify-between pt-4 md:justify-center md:gap-14">
					<Link href="/shop/Women">
						<a className="text-contrast bg-accent flex h-12 w-40  items-center justify-center rounded-md font-semibold lg:h-[3.5rem] lg:w-60">
							SHOP WOMEN
						</a>
					</Link>

					<Link href="/shop/Men">
						<a className="text-contrast bg-accent flex h-12 w-40 items-center justify-center rounded-md font-semibold lg:h-[3.5rem] lg:w-60">
							SHOP MEN
						</a>
					</Link>
				</div>
			</section>

			<section className="relative top-44 grid grid-cols-1 gap-8 px-2 md:top-44 md:grid-cols-2 md:px-8 lg:top-64 lg:grid-cols-4 xl:gap-x-8">
				{quickLinks.map(link => {
					return (
						<Link key={link.name} href={link.href}>
							<a className="relative h-72 w-full">
								<Image
									src={link.img}
									alt={link.alt}
									layout="fill"
									objectFit="cover"
									objectPosition="center"
								/>
								<h3 className="text-contrast relative top-[calc(50%-1rem)] text-center text-3xl font-semibold">
									{link.name}
								</h3>
							</a>
						</Link>
					);
				})}
			</section>

			<footer className="relative top-56 px-5 pb-5 md:top-64 lg:top-80">
				<div className="border-t-contrast border-t-[1px]">
					<p className="text-contrast text-center text-sm">
						&#169; 2022 | Warrior Athletics | Redefine Your Limits
					</p>
				</div>
			</footer>
		</main>
	);
}
