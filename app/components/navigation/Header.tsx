"use client";
import React from "react";
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
	// const dispatch = useDispatch();

	return (
		<nav className={styles.headerMain}>
			{/* left title */}
			<div>
				<p className={styles.headerTitle}>
					Elegant<span>Telework</span>
				</p>
			</div>
			{/* center links */}
			<div className={styles.navCenterLinks}>
				<NavLink href={"/"}>Home</NavLink>
				<NavLink href={"/shop"}>Shop</NavLink>
				<NavLink href={"/login"}>Login</NavLink>
				<NavLink href={"/login"}>Login</NavLink>
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
					// onClick={() => dispatch(toggleDrawer())}
					className={styles.navLinkIcons}>
					<ShoppingCart size={24} />
				</button>
			</div>
		</nav>
	);
}
