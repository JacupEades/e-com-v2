"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Main.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { toggleDrawer } from "@/app/redux/slices/drawerSlice";
import { motion } from "framer-motion";
import jsonData from "../../database/data.json";
import { Minus, Plus, X } from "@phosphor-icons/react";
import Image from "next/image";

type Props = {};

export default function CartDrawer({}: Props) {
	const [shoppingCartStorage, setShoppingCartStorage] = useState([]);
	const [removedItem, setRemovedItem] = useState(false);

	const { drawer } = useSelector((state: RootState) => ({
		...state,
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		// Retrieve the data from localStorage and parse it
		const localStorageData = localStorage.getItem("shoppingCart");
		let parsedData = [];
		if (localStorageData) {
			parsedData = JSON.parse(localStorageData);
		}
		// Update the state with the parsed data
		setShoppingCartStorage(parsedData);
	}, []);

	useEffect(() => {
		// Retrieve the data from localStorage and parse it
		const localStorageData = localStorage.getItem("shoppingCart");
		let parsedData = [];
		if (localStorageData) {
			parsedData = JSON.parse(localStorageData);
		}
		// Update the state with the parsed data
		setShoppingCartStorage(parsedData);
		setRemovedItem(false);
	}, [removedItem, drawer]);

	const handleClose = () => {
		dispatch(toggleDrawer());
	};

	if (!drawer.open) {
		return null;
	}

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={styles.overlayBG}
				onClick={handleClose}
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={styles.cartDrawerHeader}>
				<h5>Cart(# items)</h5>
				<button onClick={handleClose}>
					<X size={32} />
				</button>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={styles.cartDrawerMain}>
				<div className={styles.cartCardsContainer}>
					{shoppingCartStorage.map((obj: any, i) => {
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
							localStorage.setItem(
								"shoppingCart",
								JSON.stringify(removeItemById)
							);
							setRemovedItem(true);
						};

						return (
							<div key={i} className={styles.cartCard}>
								<div className={styles.cardImage}>
									<Image src={`/bamboo.svg`} alt={"placeholder"} fill />
								</div>
								<div className={styles.cardDetails}>
									<p className={styles.cardTitle}>{singleItem.name}</p>
									<p className={styles.cardColor}>
										TOP COLOR: <span>{singleItem.color}</span>
									</p>
									<p className={styles.cardColor}>
										LEG COLOR: <span>{singleItem.color}</span>
									</p>
									<div className={styles.cardOptions}>
										<div className={styles.cardOption1}>
											{/* counter */}
											<div className={styles.cardCounter}>
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
										<div className={styles.cardOption2}>
											<button onClick={() => handleRemove()}>Remove</button>
											<div className={styles.blob} />
											<button>Move to wishlist</button>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</motion.div>
		</>
	);
}
