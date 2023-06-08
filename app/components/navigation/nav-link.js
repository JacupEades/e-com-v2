import Link from "next/link";
import styles from "../../styles/Main.module.scss";

export default function NavLink({ href, children, activeTab }) {
	return (
		<Link
			href={href}
			className={href === activeTab ? styles.navLinkActive : styles.navLink}>
			{children}
		</Link>
	);
}
