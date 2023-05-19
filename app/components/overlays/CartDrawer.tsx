"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Main.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { toggleDrawer } from "@/app/redux/slices/drawerSlice";
import { motion } from "framer-motion";
import jsonData from "../../database/data.json";

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
				className={styles.cartDrawerMain}>
				<div onClick={handleClose}>Close drawer</div>
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
								<h3>{singleItem.name}</h3>
								<p>Color: {singleItem.color}</p>
								<p>Id: {singleItem.id}</p>
								<p>Price: ${singleItem.price * obj.qty}</p>
								<p>Qty: {obj.qty}</p>
								<button onClick={() => handleRemove()}>Remove All</button>
							</div>
						);
					})}
				</div>
			</motion.div>
		</>
	);
}
