"use client";
import catS from "../../../styles/Shop.module.scss";
import PrimaryBtn from "@/app/components/buttons/PrimaryBtn";
import data from "../../../database/data.json";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "@/app/redux/slices/drawerSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SecondaryBtn from "@/app/components/buttons/SecondaryBtn";
import { CaretUp, X } from "@phosphor-icons/react";

type Props = {};

export default function Chairs({}: Props) {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleGetItem = (e: any, itemId: number) => {
		e.stopPropagation();
		// 0. checkout the local storage first to see if there is anything there
		const arrKeyCheck = localStorage.getItem("shoppingCart");
		const currentLS = arrKeyCheck ? JSON.parse(arrKeyCheck) : [];
		// 1. send the entire item to the storage
		const itemCheck = currentLS.find(
			(localObj: any) => localObj.itemId == itemId
		);
		const itemThere = Boolean(itemCheck);

		if (itemThere === false) {
			// 2. add a quantity in storage
			currentLS.push({ itemId, qty: 1 });
			localStorage.setItem("shoppingCart", JSON.stringify(currentLS));
		} else {
			// 3. if obj.id is already there add to the quantity
			itemCheck.qty += 1;
			localStorage.setItem("shoppingCart", JSON.stringify(currentLS));
		}
	};

	const handleDrawer = () => {
		dispatch(toggleDrawer());
	};

	const TempDataComp = () => {
		return (
			<div className={catS.productCards}>
				{data.item.map((obj) => (
					<div
						key={obj.id}
						className={catS.productCard}
						onClick={() => router.push(`/product/${obj.id}`)}>
						<div className={catS.imgContainer}>
							<Image
								src="/bamboo.svg"
								width={306}
								height={262}
								alt="Picture of a desk"
							/>
						</div>
						<h3>{obj.name}</h3>
						<p>SKU: {obj.id}</p>
						<p>Color: {obj.color[0].Top}</p>
						<p>Price: ${obj.price}.99</p>
						<PrimaryBtn
							label={"Get Item"}
							onClick={(e: any) => handleGetItem(e, obj.id)}
						/>
					</div>
				))}
			</div>
		);
	};

	return (
		<main className={catS.mainWithNav}>
			<div className={catS.categoryShopMain}>
				{/* Filter Sidebar */}
				<aside className={catS.filterAside}>
					<h5>Filter</h5>
					{/* Type */}
					<section className={catS.filterSection}>
						<button>
							<h6>Type</h6>
							<CaretUp size={24} />
						</button>
						<p>Placeholder</p>
						<p>Placeholder</p>
						<p>Placeholder</p>
						<p>Placeholder</p>
						<p>Placeholder</p>
					</section>
				</aside>
				{/* Cards */}
				<div className={catS.desktopCardsMain}>
					<div className={catS.desktopCardsTop}>
						{/* Chips */}
						<div className={catS.filterChipsMain}>
							<div className={catS.filterChip}>
								<p>Fake</p> <X size={20} />
							</div>
							<div className={catS.filterChip}>
								<p>Fake</p> <X size={20} />
							</div>
						</div>
						{/* Sort Input */}
						<div className={catS.sortMain}>
							<p>Sort:</p>
							<SecondaryBtn
								label={""}
								onClick={() => console.log("coming soon")}
							/>
						</div>
					</div>
					<TempDataComp />
				</div>
			</div>
		</main>
	);
}
