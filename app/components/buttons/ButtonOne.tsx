import styles from "../../styles/Main.module.scss";

type Props = {
	label: string;
	onClick: any;
};

export default function ButtonOne({ label, onClick }: Props) {
	return (
		<>
			<button onClick={() => onClick()} className={styles.buttonOne}>
				{label}
			</button>
		</>
	);
}
