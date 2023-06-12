"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Main.module.scss";
import NavLink from "./nav-link";
import {
	MagnifyingGlass,
	ShoppingCart,
	UserCircle,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "@/app/redux/slices/drawerSlice";
import { RootState } from "@/app/redux/store";
import { usePathname } from "next/navigation";

export default function Header() {
	// Cart update
	const [shoppingCartStorage, setShoppingCartStorage] = useState([]);
	const [removedItem, setRemovedItem] = useState(false);
	// Navigation
	const [currentPath, setCurrentPath] = useState("/");
	const [checkPath, setCheckPath] = useState(false);
	// Redux
	const { drawer } = useSelector((state: RootState) => ({
		...state,
	}));
	const dispatch = useDispatch();
	const pathname = usePathname();

	// Reset the path name
	const heyCP = () => {
		setCheckPath(true);
	};
	useEffect(() => {
		if (checkPath === true && window) {
			setCheckPath(false);
		}
	}, [checkPath, currentPath]);
	useEffect(() => {
		setCurrentPath(pathname);
	}, [pathname]);
	// Cart from local storage
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

	return (
		<nav className={styles.headerMain}>
			{/* left title */}
			<Link href={"/"} className={styles.headerTitleMain}>
				<p className={styles.headerTitle}>
					Natural<span>Nooks</span>
				</p>
			</Link>
			{/* center links */}
			<div className={styles.navCenterLinks} onClick={() => heyCP()}>
				<NavLink href={"/desks"} currentPath={currentPath}>
					Desks
				</NavLink>
				<NavLink href={"/chairs"} currentPath={currentPath}>
					Chairs
				</NavLink>
				<NavLink href={"/storage"} currentPath={currentPath}>
					Storage
				</NavLink>
				<NavLink href={"/desk-accessories"} currentPath={currentPath}>
					Desk Accessories
				</NavLink>
			</div>
			{/* right links */}
			<div className={styles.navRightLinks}>
				<Link href={"/shop"} className={styles.navLinkIcons}>
					<MagnifyingGlass size={24} />
				</Link>
				<Link href={"/login"} className={styles.navLinkIcons}>
					<UserCircle size={24} />
				</Link>
				<button
					onClick={() => dispatch(toggleDrawer())}
					className={styles.navCart}>
					<ShoppingCart size={24} />
					{shoppingCartStorage.length > 0 ? (
						<div className={styles.navCartBadge}>
							{shoppingCartStorage.length}
						</div>
					) : (
						<></>
					)}
				</button>
			</div>
		</nav>
	);
}
