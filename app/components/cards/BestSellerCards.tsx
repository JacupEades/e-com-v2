// "use client";
import Image from "next/image";
import homeS from "../../styles/Home.module.scss";

type Props = {};

export default function BestSellerCards({}: Props) {
	const FakeCard = ({ image, name }: any) => {
		return (
			<div className={homeS.bsCard}>
				<Image
					src={image}
					alt={image}
					height={472}
					width={332}
					className={homeS.bsCardImage}
				/>
				<div className={homeS.cardBottom}>
					{/* cardLeft */}
					<div className={homeS.cardBLeft}>
						<h4>{name}</h4>
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
			<FakeCard image={"/bamboo.svg"} name={"Standing Desk Plus"} />
			<FakeCard image={"/chair_1.svg"} name={"Ergonomic Mesh Chair"} />
			<FakeCard image={"/chair_2.svg"} name={"Office Desk"} />
			<FakeCard image={"/chair_3.svg"} name={"Headrest"} />
			<FakeCard image={"/chair_4.svg"} name={"L Desk"} />
			<FakeCard image={"/chair_5.svg"} name={"Monitor Riser Stand"} />
		</>
	);
}
