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
import { useDispatch } from "react-redux";
import { toggleDrawer } from "@/app/redux/slices/drawerSlice";

export default function Header() {
	const [currentPath, setCurrentPath] = useState("/");

	const dispatch = useDispatch();

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	return (
		<nav className={styles.headerMain}>
			{/* left title */}
			<Link href={"/"} className={styles.headerTitleMain}>
				<p className={styles.headerTitle}>
					Elegant<span>Telework</span>
				</p>
			</Link>
			{/* center links */}
			<div className={styles.navCenterLinks}>
				<NavLink href={"/desks"} activeTab={currentPath}>
					Desks
				</NavLink>
				<NavLink href={"/chairs"} activeTab={currentPath}>
					Chairs
				</NavLink>
				<NavLink href={"/storage"} activeTab={currentPath}>
					Storage
				</NavLink>
				<NavLink href={"/desk-accessories"} activeTab={currentPath}>
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
					className={styles.navLinkIcons}>
					<ShoppingCart size={24} />
				</button>
			</div>
		</nav>
	);
}
