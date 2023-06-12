"use client";
import { useEffect, useState } from "react";
import data from "../../database/data.json";
import proS from "../../styles/Product.module.scss";
import Link from "next/link";

type Param = { params: { productId: string } };
type Product = { id: string; name: string; color: string; price: number };

export default function Product({ params }: Param) {
	const [product, setProduct] = useState<Product>({
		id: params.productId,
		name: "",
		color: "",
		price: 0,
	});

	useEffect(() => {
		const filteredProduct = data.item.find(
			(obj: any) => String(obj.id) === params.productId
		);
		if (filteredProduct !== undefined) {
			setProduct(filteredProduct as any as Product);
		}
	}, [params.productId]);

	useEffect(() => {
		console.log("product", product);
	}, [product]);

	return (
		<>
			{/* 2 column scrolling grid */}
			<div className={proS.crumbMain}>
				<Link href={"/"}>Home</Link>
				<p>/</p>
				<Link href={"/desks"}>Desks</Link>
				<p>/</p>
				<p>Standing Desk Plus</p>
			</div>
			<section className={proS.topGrid}>
				<div>
					<button className={proS.proCarBtn}>TEST</button>
					<button className={proS.proCarBtn}>TEST</button>
				</div>
				<div>
					<h1>{product.id}</h1>
					<h1>{product.name}</h1>
					<h1>{product.color}</h1>
					<h1>{product.price}</h1>
				</div>
			</section>
		</>
	);
}
