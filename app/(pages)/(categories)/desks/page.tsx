"use client";
import catS from "../../../styles/Shop.module.scss";
import PrimaryBtn from "@/app/components/buttons/PrimaryBtn";
import data from "../../../database/data.json";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "@/app/redux/slices/drawerSlice";
import { useRouter } from "next/navigation";

type Props = {};

export default function Desks({}: Props) {
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
			<div className={catS.tempCards}>
				{data.item.map((obj) => (
					<div
						key={obj.id}
						className={catS.tempCard}
						onClick={() => router.push(`/product/${obj.id}`)}>
						<h3>{obj.name}</h3>
						<p>SKU: {obj.id}</p>
						<p>Color: {obj.color}</p>
						<p>Price: ${obj.price}.99</p>
						<PrimaryBtn
							label={"Get Item"}
							onClick={(e: any) => handleGetItem(e, obj.id)}
						/>
					</div>
				))}
				<PrimaryBtn label={"open drawer"} onClick={handleDrawer} />
			</div>
		);
	};

	return (
		<main className={catS.mainWithNav}>
			{/*  */}
			<TempDataComp />
		</main>
	);
}
