"use client";
import React from "react";
import styles from "../../styles/Main.module.scss";
import NavLink from "./nav-link";

export default function Footer() {
	// const dispatch = useDispatch();

	return (
		<footer className={styles.footerMain}>
			{/* left title */}
			<div>
				<p className={styles.footerTitle}>
					Elegant<span>Telework</span>
				</p>
			</div>
			{/* Support */}
			<div className={styles.footerSection}>
				<h6>Support</h6>
				<NavLink href={"/"}>Shipping</NavLink>
				<NavLink href={"/"}>Returns</NavLink>
				<NavLink href={"/"}>Warrenty</NavLink>
				<NavLink href={"/"}>Terms & Conditions</NavLink>
			</div>
			<div className={styles.footerSection}>
				<h6>Bra</h6>
				<NavLink href={"/"}>Returns</NavLink>
				<NavLink href={"/"}>Shipping</NavLink>
				<NavLink href={"/"}>Terms & Conditions</NavLink>
				<NavLink href={"/"}>Warrenty</NavLink>
			</div>
			<div className={styles.footerSection}>
				<h6>Sale!!</h6>
				<NavLink href={"/"}>Terms & Conditions</NavLink>
				<NavLink href={"/"}>Returns</NavLink>
				<NavLink href={"/"}>Warrenty</NavLink>
				<NavLink href={"/"}>Shipping</NavLink>
			</div>
		</footer>
	);
}
