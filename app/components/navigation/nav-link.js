import Link from "next/link";
import styles from "../../styles/Main.module.scss";

export default function NavLink({ href, children, currentPath }) {
	return (
		<Link
			href={href}
			className={href === currentPath ? styles.navLinkActive : styles.navLink}>
			{children}
		</Link>
	);
}
