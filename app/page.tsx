import Image from "next/image";
import styles from "./styles/Main.module.scss";
import HomeCarousel from "./components/carousels/HomeCarousel";

export default function Home() {
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
	const CategoryPartOne = () => {
		return <div>Test</div>;
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
						<CategoryPartOne />
						<CategoryPartOne />
						<CategoryPartOne />
						<CategoryPartOne />
					</div>
				</div>
			</section>
			{/* Carousel */}
			<HomeCarousel />
			{/* Green Info Section */}
			<section className={styles.infoMain}>
				<div className={styles.info}>
					<p>STUFF</p>
				</div>
			</section>
		</main>
	);
}
