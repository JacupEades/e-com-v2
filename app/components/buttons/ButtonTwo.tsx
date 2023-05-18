import styles from "../../styles/Main.module.scss";

type Props = {
	label: string;
	onClick: any;
};

export default function ButtonTwo({ label, onClick }: Props) {
	return (
		<>
			<button onClick={() => onClick()} className={styles.buttonTwo}>
				{label}
			</button>
		</>
	);
}
