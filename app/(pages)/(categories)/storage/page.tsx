"use client";
import catS from "../../../styles/Shop.module.scss";
import { CaretDown, X } from "@phosphor-icons/react";
import ShopCard from "@/app/components/cards/ShopCard";
import FilterDrop from "@/app/components/dropdowns/shop-filters/FliterDrop";
import SecondaryBtn from "@/app/components/buttons/SecondaryBtn";

type Props = {};

export default function Storage({}: Props) {
	return (
		<main className={catS.mainWithNav}>
			<div className={catS.categoryShopMain}>
				{/* Filter Sidebar */}
				<aside className={catS.filterAside}>
					<h5>Filter</h5>
					{/* Type */}
					<FilterDrop dropType={"type"} />
					<FilterDrop dropType={"price"} />
					<FilterDrop dropType={"color"} />
					<FilterDrop dropType={"rating"} />
					<FilterDrop dropType={"shipping"} />
				</aside>
				{/* Cards */}
				<div className={catS.cardsMain}>
					<div className={catS.desktopCardsTop}>
						{/* Chips */}
						<div className={catS.filterChipsMain}>
							<div className={catS.filterChip}>
								<p>Default</p> <X size={20} />
							</div>
							<div className={catS.filterChipSelected}>
								<p>Selected</p> <X size={20} />
							</div>
							<button className={catS.clearAllBtn}>Clear All</button>
						</div>
						{/* Sort Input */}
						<div className={catS.sortMain}>
							<p>Sort:</p>
							<div className={catS.dropDownMain}>
								<button className={catS.dropDownBtn}>
									Featured <CaretDown size={16} />
								</button>
							</div>
						</div>
					</div>
					{/* Mobile */}
					<div className={catS.mobileCardsTop}>
						<SecondaryBtn
							label={"Filter & Sort"}
							onClick={() => console.log("not Ready")}
						/>
					</div>
					<ShopCard />
				</div>
			</div>
		</main>
	);
}
