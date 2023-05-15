import styles from "./styles/Main.module.scss";

export default function Home() {
	return (
		<main className={styles.mainWithNav}>
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
			<p className={styles.p3}>
				Lorem ipsum dolor sit amet consectetur. Egestas tincidunt lectus eu
				placerat cursus erat et. Pharetra congue tellus tortor turpis
				scelerisque lectus mi. Vel gravida in diam pellentesque leo purus.
			</p>
			<button className={styles.datBtn}></button>
		</main>
	);
}
