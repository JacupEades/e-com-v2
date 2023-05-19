"use client";
import Image from "next/image";
import styles from "./styles/Main.module.scss";
import HomeCarousel from "./components/carousels/HomeCarousel";
import {
	HouseLineIcon,
	LeafIcon,
	ShieldCheckIcon,
	TruckIcon,
} from "./components/icons/icons";
import Link from "next/link";

export default function Home() {
	const handleClick = () => {
		console.log("gotta do dis");
	};

	const FakeCard = () => {
		return (
			<div className={styles.bsCard}>
				<Image
					src={"/bamboo.svg"}
					alt={"bamboo"}
					height={472}
					width={332}
					className={styles.bsCardImage}
				/>
				<div className={styles.cardBottom}>
					{/* cardLeft */}
					<div className={styles.cardBLeft}>
						<h4>Standing Desk Plus</h4>
						<p>Rating 4.9(65)</p>
					</div>
					{/* cardright */}
					<div className={styles.cardBRight}>
						<h4>$399</h4>
						<div className={styles.cardBRightDiscount}>
							<p className={styles.ogPrice}>$499</p>
							<p className={styles.discountPer}>-20%</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
	const CategoryPartOne = ({ category, image }: any) => {
		return (
			<div className={styles.byCatSection}>
				<div className={styles.byCatImageContainer}>
					<Image
						src={`/${image}.svg`}
						alt={category}
						height={472}
						width={332}
						className={styles.byCatImage}
					/>
				</div>
				<Link href={"/"}>{category}</Link>
			</div>
		);
	};

	const InfoBlock = ({ icon }: any) => {
		return (
			<div className={styles.infoBlock}>
				<div className={styles.infoBMain}>
					{icon}
					<h5>Sustainably Made</h5>
					<p>Made out of recycled and recyclable materials.</p>
				</div>
			</div>
		);
	};

	return (
		<main className={styles.mainWithNav}>
			{/* HERO Section */}
			<section className={styles.heroSection}>
				<div className={styles.content}>
					{/* left half */}
					<div className={styles.heroSectionLeftMain}>
						<div className={styles.heroSectionLeft}>
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
							<button>SHOP NOW</button>
						</div>
					</div>
					{/* empty right half */}
					<div></div>
				</div>
			</section>
			{/* Best Sellers Now on sale */}
			<section className={styles.bestSellersMain}>
				{/* title */}
				<h2>Best-Sellers, Now on Sale</h2>
				{/* Sales scrolling */}
				<div className={styles.bestSellersCards}>
					<div className={styles.bsCardContainer}>
						<FakeCard />
						<FakeCard />
						<FakeCard />
						<FakeCard />
						<FakeCard />
						<FakeCard />
						<FakeCard />
						<FakeCard />
					</div>
				</div>
				{/* Shop by Categories */}
				<div className={styles.byCatMain}>
					<h2>Shop by Categories</h2>
					{/* grid container */}
					<div className={styles.byCatContainer}>
						{/* 1/4 grid image and title */}
						<CategoryPartOne image={"bamboo"} category={"Desks"} />
						<CategoryPartOne image={"bamboo"} category={"Chairs"} />
						<CategoryPartOne image={"bamboo"} category={"Storage"} />
						<CategoryPartOne image={"bamboo"} category={"Accessories"} />
					</div>
				</div>
			</section>
			{/* Carousel */}
			<HomeCarousel />
			{/* Green Info Section */}
			<section className={styles.infoMain}>
				<div className={styles.info}>
					<InfoBlock icon={<LeafIcon />} />
					<InfoBlock icon={<TruckIcon />} />
					<InfoBlock icon={<HouseLineIcon />} />
					<InfoBlock icon={<ShieldCheckIcon />} />
				</div>
			</section>
			{/* Our Mission/Collection Section */}
			<section className={styles.ourMain}>
				<div className={styles.ourSection}>
					{/* top left */}
					<div className={styles.our1}>
						<p className={styles.ourSubTitle}>Our Mission</p>
						<h2>Enhancing Your Home Office Experience.</h2>
						<p className={styles.ourP}>
							At NaturalNooks, we believe a beautiful, comfortable workspace can
							elevate your productivity and well-being. Our mission is to create
							a seamless blend of style, comfort, and functionality in your home
							office. We offer a sustainable approach to work, promoting
							ergonomic design and mindful living, one piece of furniture at a
							time.
						</p>
						<button onClick={() => handleClick()}>SHOP NOW</button>
					</div>
					{/* top right */}
					<div className={styles.our2}>
						<div className={styles.ourSVGtr} />
					</div>
					{/* bottom left */}
					<div className={styles.our3}>
						<div className={styles.ourSVGbl} />
					</div>
					{/* bottom right */}
					<div className={styles.our4}>
						<p className={styles.ourSubTitle}>Our Collection</p>
						<h2>Contemporary Design Meets Durability.</h2>
						<p className={styles.ourP}>
							Our curated range of furniture is crafted for the everyday demands
							of remote work. Every desk, chair, gadget, and accessory is
							constructed with the promise of longevity, backed by comprehensive
							warranties. We prioritize adaptable design that evolves with your
							changing needs, ensuring our pieces remain a cherished part of
							your workspace for years to come.
						</p>
						<button onClick={() => handleClick()}>EXPLORE COLLECTION</button>
					</div>
				</div>
			</section>
		</main>
	);
}
