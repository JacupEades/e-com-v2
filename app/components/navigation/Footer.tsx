"use client";
import React from "react";
import styles from "../../styles/Main.module.scss";
import Link from "next/link";

export default function Footer() {
	// const dispatch = useDispatch();

	return (
		<footer className={styles.footerMain}>
			{/* left title */}
			<div>
				<p className={styles.footerTitle}>
					Natural<span>Nooks</span>
				</p>
			</div>
			{/* Support */}
			<div className={styles.footerSection}>
				<h6>Support</h6>
				<Link href={"/"}>Shipping</Link>
				<Link href={"/"}>Returns</Link>
				<Link href={"/"}>Warrenty</Link>
				<Link href={"/"}>Terms & Conditions</Link>
			</div>
			<div className={styles.footerSection}>
				<h6>Bra</h6>
				<Link href={"/"}>Returns</Link>
				<Link href={"/"}>Shipping</Link>
				<Link href={"/"}>Terms & Conditions</Link>
				<Link href={"/"}>Warrenty</Link>
			</div>
			<div className={styles.footerSection}>
				<h6>Sale!!</h6>
				<Link href={"/"}>Terms & Conditions</Link>
				<Link href={"/"}>Returns</Link>
				<Link href={"/"}>Warrenty</Link>
				<Link href={"/"}>Shipping</Link>
			</div>
		</footer>
	);
}
