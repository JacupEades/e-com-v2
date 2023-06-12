import CategoryHeader from "@/app/components/layout/CategoryHeader";
import styles from "../../../styles/Main.module.scss";

export default function Layout({ children }: any) {
	return (
		<>
			<main className={styles.mainWithNav}>
				<CategoryHeader
					title={"Chairs"}
					text={
						"With height-adjustable, stand alone, wall-mounted, or collapsable options, NaturalNook desks fit home offices every size and need."
					}
				/>
				{children}
			</main>
		</>
	);
}
