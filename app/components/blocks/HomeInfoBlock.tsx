// "use client";
import homeS from "../../styles/Home.module.scss";

type Props = {
	icon: any;
	title: string;
	text: string;
};

export default function HomeInfoBlock({ icon, title, text }: Props) {
	return (
		<>
			<div className={homeS.infoBlock}>
				<div className={homeS.infoBMain}>
					{icon}
					<div>
						<h5>{title}</h5>
						<p>{text}</p>
					</div>
				</div>
			</div>
		</>
	);
}
