import styles from "../../styles/Main.module.scss";

export default function Layout({ children }: any) {
	return (
		<>
			<main className={styles.mainWithNav}>{children}</main>
		</>
	);
}
