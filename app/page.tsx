"use client";
import homeS from "./styles/Home.module.scss";
import HomeCarousel from "./components/carousels/HomeCarousel";
import {
	HouseLineIcon,
	LeafIcon,
	ShieldCheckIcon,
	TruckIcon,
} from "./components/icons/icons";
import PrimaryBtn from "./components/buttons/PrimaryBtn";
import BestSellerCards from "./components/cards/BestSellerCards";
import CategoryBlock from "./components/blocks/CategoryBlock";
import HomeInfoBlock from "./components/blocks/HomeInfoBlock";

export default function Home() {
	const handleClick = () => {
		console.log("gotta do dis");
	};

	return (
		<main className={homeS.mainWithNav}>
			{/* HERO Section */}
			<section className={homeS.heroSection}>
				<div className={homeS.content}>
					{/* left half */}
					<div className={homeS.heroSectionLeftMain}>
						<div className={homeS.heroSectionLeft}>
							<h1>
								Work From Home, <br />
								In Style & Comfort
							</h1>
							<p>
								Welcome to NaturalNooks, your one-stop shop for home office
								essentials. Each product is designed to bring a balance of style
								and comfort to your workspace. Experience high-quality design
								that&apos;s worth every penny!
							</p>
							<PrimaryBtn label={"SHOP NOW"} onClick={handleClick} />
						</div>
					</div>
					{/* empty right half */}
					<div></div>
				</div>
			</section>
			{/* Best Sellers Now on sale */}
			<section className={homeS.bestSellersMain}>
				{/* title */}
				<h2>Best-Sellers, Now on Sale</h2>
				{/* Sales scrolling */}
				<div className={homeS.bestSellersCards}>
					<div className={homeS.bsCardContainer}>
						<BestSellerCards />
					</div>
				</div>
				{/* Shop by Categories */}
				<div className={homeS.byCatMain}>
					<h2>Shop by Categories</h2>
					{/* grid container */}
					<div className={homeS.byCatContainer}>
						{/* 1/4 grid image and title */}
						<CategoryBlock image={"/cat_img_1.svg"} category={"Desks"} />
						<CategoryBlock image={"/cat_img_2.svg"} category={"Chairs"} />
						<CategoryBlock image={"/cat_img_3.svg"} category={"Storage"} />
						<CategoryBlock image={"/cat_img_4.svg"} category={"Accessories"} />
					</div>
				</div>
			</section>
			{/* Carousel */}
			<HomeCarousel />
			{/* Green Info Section */}
			<section className={homeS.infoMain}>
				<div className={homeS.info}>
					<HomeInfoBlock
						icon={<LeafIcon />}
						title={"Sustainably Made"}
						text={"Made out of recycled and recyclable materials."}
					/>
					<HomeInfoBlock
						icon={<TruckIcon />}
						title={"Free Fast Shipping"}
						text={
							"Free shipping within United States, arriving in 1 to 5 days."
						}
					/>
					<HomeInfoBlock
						icon={<HouseLineIcon />}
						title={"365 Day Home Trial"}
						text={
							"A test run to make sure you're in love with the comfort and look."
						}
					/>
					<HomeInfoBlock
						icon={<ShieldCheckIcon />}
						title={"10-Year Warranty"}
						text={"We will fix it if it breaks"}
					/>
				</div>
			</section>
			{/* Our Mission/Collection Section */}
			<section className={homeS.ourMain}>
				<div className={homeS.ourSection}>
					{/* top left */}
					<div className={homeS.our1}>
						<p className={homeS.ourSubTitle}>Our Mission</p>
						<h2>Enhancing Your Home Office Experience.</h2>
						<p className={homeS.ourP}>
							At NaturalNooks, we believe a beautiful, comfortable workspace can
							elevate your productivity and well-being. Our mission is to create
							a seamless blend of style, comfort, and functionality in your home
							office. We offer a sustainable approach to work, promoting
							ergonomic design and mindful living, one piece of furniture at a
							time.
						</p>
						<PrimaryBtn label={"SHOP NOW"} onClick={handleClick} />
					</div>
					{/* top right */}
					<div className={homeS.our2}>
						<div className={homeS.ourSVGtr} />
					</div>
					{/* bottom left */}
					<div className={homeS.our3}>
						<div className={homeS.ourSVGbl} />
					</div>
					{/* bottom right */}
					<div className={homeS.our4}>
						<p className={homeS.ourSubTitle}>Our Collection</p>
						<h2>Contemporary Design Meets Durability.</h2>
						<p className={homeS.ourP}>
							Our curated range of furniture is crafted for the everyday demands
							of remote work. Every desk, chair, gadget, and accessory is
							constructed with the promise of longevity, backed by comprehensive
							warranties. We prioritize adaptable design that evolves with your
							changing needs, ensuring our pieces remain a cherished part of
							your workspace for years to come.
						</p>
						<PrimaryBtn label={"EXPLORE COLLECTION"} onClick={handleClick} />
					</div>
				</div>
			</section>
		</main>
	);
}
