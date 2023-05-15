"use client";
import Link from "next/link";
import styles from "../../styles/Main.module.scss";
// you have to use use client to use these icons i think
import { Horse, Heart, Cube } from "@phosphor-icons/react";

export default function Shop() {
	return (
		<main className={styles.mainWithNav}>
			<Horse />
			<Heart color="#AE2983" weight="fill" size={32} />
			<Cube color="teal" weight="duotone" />
			<p className={styles.p3}>
				Lorem ipsum dolor sit amet consectetur. Egestas tincidunt lectus eu
				placerat cursus erat et. Pharetra congue tellus tortor turpis
				scelerisque lectus mi. Vel gravida in diam pellentesque leo purus.
			</p>
			<p className={styles.p1}>
				Lorem ipsum dolor sit amet consectetur. Egestas tincidunt lectus eu
				placerat cursus erat et. Pharetra congue tellus tortor turpis
				scelerisque lectus mi. Vel gravida in diam pellentesque leo purus.
			</p>
			<p className={styles.p2}>
				Lorem ipsum dolor sit amet consectetur. Egestas tincidunt lectus eu
				placerat cursus erat et. Pharetra congue tellus tortor turpis
				scelerisque lectus mi. Vel gravida in diam pellentesque leo purus.
			</p>
		</main>
	);
}
