"use client";
import Image from "next/image";
import homeS from "../../styles/Home.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
	category: any;
	image: any;
};

export default function CategoryBlock({ category, image }: Props) {
	const router = useRouter();
	let linkRef = "";

	switch (category) {
		case "Desks":
			linkRef = "desks";
			break;
		case "Chairs":
			linkRef = "chairs";
			break;
		case "Storage":
			linkRef = "storage";
			break;
		case "Accessories":
			linkRef = "desk-accessories";
			break;
		default:
			"None";
	}

	return (
		<>
			<div className={homeS.byCatSection}>
				<div
					className={homeS.byCatImageContainer}
					onClick={() => router.push(`/${linkRef}`)}>
					<Image
						src={image}
						alt={category}
						height={472}
						width={332}
						className={homeS.byCatImage}
					/>
				</div>
				<Link href={`/${linkRef}`}>{category}</Link>
			</div>
		</>
	);
}
