import styles from "../../styles/Main.module.scss";

type Props = {
	iconL?: any;
	iconR?: any;
	label: string;
	onClick: any;
};

export default function PrimaryBtn({ iconL, iconR, label, onClick }: Props) {
	return (
		<>
			<button onClick={(e) => onClick(e)} className={styles.primaryBtn}>
				{iconL}
				{label}
				{iconR}
			</button>
		</>
	);
}
