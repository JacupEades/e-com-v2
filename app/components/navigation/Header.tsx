import React from "react";
import styles from "../../styles/Main.module.scss";
import NavLink from "./nav-link";

export default function Header() {
	return (
		<nav className={styles.headerSettingContainer}>
			<div className={styles.headerTopContainer}>
				<NavLink href={"/"}>Home</NavLink>
				<NavLink href={"/shop"}>Shop</NavLink>
			</div>
		</nav>
	);
}
