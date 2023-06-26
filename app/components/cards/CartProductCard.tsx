// "use client";
import React, { useEffect } from "react";
import cartS from "../../styles/Cart.module.scss";
import jsonData from "../../database/data.json";
import { Minus, Plus } from "@phosphor-icons/react";
import Image from "next/image";

type Props = {
	shoppingCartStorage: any;
	setRemovedItem: any;
	setSubtotal: any;
};

export default function CartProductCard({
	shoppingCartStorage,
	setRemovedItem,
	setSubtotal,
}: Props) {
	// Update the subtotal for the parent element
	useEffect(() => {
		let subtotal = 0;

		shoppingCartStorage.forEach((obj: any) => {
			const datbaseItem: any = jsonData.item.filter(
				(dbObj) => dbObj.id === obj.itemId
			);
			const singleItem = datbaseItem[0];
			subtotal += singleItem.price * obj.qty;
		});

		setSubtotal(subtotal);
	}, [shoppingCartStorage, setRemovedItem, setSubtotal]);

	return (
		<>
			{shoppingCartStorage.map((obj: any, i: number) => {
				// get the current item from DB
				const datbaseItem: any = jsonData.item.filter(
					(dbObj) => dbObj.id === obj.itemId
				);
				const singleItem = datbaseItem[0];

				// local map scope functions
				const handleRemove = () => {
					const localStorageData = localStorage.getItem("shoppingCart");
					let parsedData = [];
					if (localStorageData) {
						parsedData = JSON.parse(localStorageData);
					}
					// remove from parsed data
					const removeItemById = parsedData.filter(
						(pD: any) => pD.itemId !== singleItem.id
					);
					localStorage.setItem("shoppingCart", JSON.stringify(removeItemById));
					setRemovedItem(true);
				};

				return (
					<div key={i} className={cartS.cartCard}>
						<div className={cartS.cardImage}>
							<Image
								src={`/chair_${obj.itemId}.svg`}
								alt={"placeholder"}
								priority={false}
								fill
							/>
						</div>
						<div className={cartS.cardDetails}>
							<p className={cartS.cardTitle}>{singleItem.name}</p>
							<p className={cartS.cardColor}>
								TOP COLOR: <span>{singleItem.color[0].Top}</span>
							</p>
							<p className={cartS.cardColor}>
								LEG COLOR: <span>{singleItem.color[0].Leg}</span>
							</p>
							<div className={cartS.cardOptions}>
								<div className={cartS.cardOption1}>
									{/* counter */}
									<div className={cartS.cardCounter}>
										<button>
											<Minus size={16} />
										</button>
										<p>{obj.qty}</p>
										<button>
											<Plus size={16} />
										</button>
									</div>
									<h6>${singleItem.price * obj.qty}</h6>
								</div>
								<div className={cartS.cardOption2}>
									<button onClick={() => handleRemove()}>Remove</button>
									<div className={cartS.blob} />
									<button>Move to wishlist</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}
