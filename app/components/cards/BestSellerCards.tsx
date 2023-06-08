// "use client";
import Image from "next/image";
import homeS from "../../styles/Home.module.scss";

type Props = {};

export default function BestSellerCards({}: Props) {
	const FakeCard = () => {
		return (
			<div className={homeS.bsCard}>
				<Image
					src={"/bamboo.svg"}
					alt={"bamboo"}
					height={472}
					width={332}
					className={homeS.bsCardImage}
				/>
				<div className={homeS.cardBottom}>
					{/* cardLeft */}
					<div className={homeS.cardBLeft}>
						<h4>Standing Desk Plus</h4>
						<p>Rating 4.9(65)</p>
					</div>
					{/* cardright */}
					<div className={homeS.cardBRight}>
						<h4>$399</h4>
						<div className={homeS.cardBRightDiscount}>
							<p className={homeS.ogPrice}>$499</p>
							<p className={homeS.discountPer}>-20%</p>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<FakeCard />
			<FakeCard />
			<FakeCard />
			<FakeCard />
			<FakeCard />
			<FakeCard />
			<FakeCard />
		</>
	);
}
