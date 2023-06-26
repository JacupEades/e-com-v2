"use client";
import catS from "../../styles/Shop.module.scss";
import data from "../../database/data.json";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Star, StarHalf } from "@phosphor-icons/react";
import WishlistHeartBtn from "@/app/components/buttons/WishlistHeartBtn";
import { useState } from "react";

type Props = {};

export default function ShopCard({}: Props) {
	const [onWishlist, setOnWishlist] = useState(true);

	const router = useRouter();

	return (
		<>
			<div className={catS.productCards}>
				{data.item.map((obj: any) => {
					const idToString = obj.id.toString();

					return (
						<div
							key={obj.id}
							className={catS.productCard}
							onClick={() => router.push(`/product/${obj.id}`)}>
							<div
								className={
									onWishlist === true
										? `${catS.cardOverlayPersist}`
										: `${catS.cardOverlayHover}`
								}>
								<WishlistHeartBtn
									className={catS.cardWishlistHeartBtn}
									classNameTrue={catS.cardWishlistHeartBtnTrue}
									onWishlist={onWishlist}
									setOnWishlist={setOnWishlist}
								/>
							</div>
							<div className={catS.cardImage}>
								<Image
									src={`/chair_${idToString}.svg`}
									width={306}
									height={262}
									alt="Picture of a desk"
									priority={false}
								/>
							</div>
							<div className={catS.cardDetail}>
								<h3 className={catS.cardDetailName}>{obj.name}</h3>
								<div className={catS.cardDetailRating}>
									<div className={catS.cardDetailRatingStars}>
										<Star size={16} weight="fill" />
										<Star size={16} weight="fill" />
										<Star size={16} weight="fill" />
										<Star size={16} weight="fill" />
										<StarHalf size={16} weight="fill" />
									</div>
									<p>4.5 (65)</p>
								</div>
								<p className={catS.cardDetailPrice}>${obj.price}</p>
								<div className={catS.cardDetailColors}>
									<p className={catS.cardDetailColorP}>
										TOP: {obj.color[0].Top}
									</p>
									<div className={catS.cardDetailColorBlob}></div>
									<p className={catS.cardDetailColorP}>
										LEG: {obj.color[1].Leg}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
