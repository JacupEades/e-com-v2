import catS from "../../styles/Shop.module.scss";

type Props = {
	title: string;
	text: string;
};

export default function CategoryHeader({ title, text }: Props) {
	return (
		<section className={catS.categoryHeaderMain}>
			<div>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</section>
	);
}
