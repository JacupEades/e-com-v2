"use client";
import React, { useEffect, useState } from "react";
import cartS from "../../styles/Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { toggleDrawer } from "@/app/redux/slices/drawerSlice";
import { motion } from "framer-motion";
import { LockSimple, X } from "@phosphor-icons/react";
import CartProductCard from "../cards/CartProductCard";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

type Props = {};

export default function CartDrawer({}: Props) {
	const [shoppingCartStorage, setShoppingCartStorage] = useState([]);
	const [subtotal, setSubtotal] = useState(0);
	const [removedItem, setRemovedItem] = useState(false);

	const { drawer } = useSelector((state: RootState) => ({
		...state,
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		const localStorageData = localStorage.getItem("shoppingCart");
		let parsedData = [];
		if (localStorageData) {
			parsedData = JSON.parse(localStorageData);
		}
		setShoppingCartStorage(parsedData);
	}, []);

	useEffect(() => {
		const localStorageData = localStorage.getItem("shoppingCart");
		let parsedData = [];
		if (localStorageData) {
			parsedData = JSON.parse(localStorageData);
		}
		setShoppingCartStorage(parsedData);
		setRemovedItem(false);
	}, [removedItem, drawer]);

	const handleClick = () => {
		console.log("gotta do dis");
	};

	const handleClose = () => {
		dispatch(toggleDrawer());
	};

	if (!drawer.open) {
		return null;
	}

	return (
		<>
			{/* Cart Header */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={cartS.overlayBG}
				onClick={handleClose}
			/>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={cartS.cartDrawerHeader}>
				<h5>Cart ({shoppingCartStorage.length} items)</h5>
				<button onClick={handleClose}>
					<X size={32} />
				</button>
			</motion.div>
			{/* Cart Cards */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={cartS.cartDrawerMain}>
				<div className={cartS.cartCardsContainer}>
					<CartProductCard
						shoppingCartStorage={shoppingCartStorage}
						setRemovedItem={setRemovedItem}
						setSubtotal={setSubtotal}
					/>
				</div>
			</motion.div>
			{/* Cart Footer */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={cartS.cartDrawerFooter}>
				{/* Content section */}
				<div className={cartS.cartDrawerFooterContent}>
					<div className={cartS.subTotal}>
						<h6>SUBTOTAL</h6>
						<h4>${subtotal}.00</h4>
					</div>
					<div className={cartS.shipping}>
						<p>Shipping</p>
						<h6>Free</h6>
					</div>
					<div className={cartS.tax}>
						<p className={cartS.taxL}>Tax</p>
						<p className={cartS.taxR}>Calculated at checkout</p>
					</div>
				</div>
				{/* Buttons section */}
				<div className={cartS.cartDrawerFooterBtnsMain}>
					<SecondaryBtn label={"VIEW CART"} onClick={handleClick} />
					<PrimaryBtn
						iconL={<LockSimple size={20} />}
						label={"CHECKOUT"}
						onClick={handleClick}
					/>
				</div>
			</motion.div>
		</>
	);
}
