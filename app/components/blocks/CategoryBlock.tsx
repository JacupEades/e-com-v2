// "use client";
import Image from "next/image";
import homeS from "../../styles/Home.module.scss";
import Link from "next/link";

type Props = {
	category: any;
	image: any;
};

export default function CategoryBlock({ category, image }: Props) {
	return (
		<>
			<div className={homeS.byCatSection}>
				<div className={homeS.byCatImageContainer}>
					<Image
						src={`/${image}.svg`}
						alt={category}
						height={472}
						width={332}
						className={homeS.byCatImage}
					/>
				</div>
				<Link href={"/"}>{category}</Link>
			</div>
		</>
	);
}
