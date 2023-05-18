import Link from "next/link";
import styles from "../../styles/Main.module.scss";

export default function NavLink({ href, children }) {
	return (
		<Link href={href} className={styles.navLink}>
			{children}
		</Link>
	);
}
