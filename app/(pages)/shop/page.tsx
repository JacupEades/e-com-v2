"use client";
import styles from "../../styles/Shop.module.scss";
import ButtonOne from "@/app/components/buttons/ButtonOne";
import data from "../../database/data.json";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "@/app/redux/slices/drawerSlice";

export default function Shop() {
	const dispatch = useDispatch();

	const handleGetItem = (itemId: number) => {
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

	return (
		<main className={styles.mainWithNav}>
			<div className={styles.tempCards}>
				{data.item.map((obj) => (
					<div key={obj.id} className={styles.tempCard}>
						<h3>{obj.name}</h3>
						<p>SKU: {obj.id}</p>
						<p>Color: {obj.color}</p>
						<p>Price: ${obj.price}.99</p>
						<ButtonOne
							// itemState[obj.id].quantity > 0 ? "Add Another" :
							label={"Get Item"}
							onClick={() => handleGetItem(obj.id)}
						/>
					</div>
				))}
				<ButtonOne label={"open drawer"} onClick={handleDrawer} />
			</div>
		</main>
	);
}
