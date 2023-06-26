"use client";
import catS from "../../../styles/Shop.module.scss";
import SecondaryBtn from "@/app/components/buttons/SecondaryBtn";
import { X } from "@phosphor-icons/react";
import FilterDropdown from "@/app/components/dropdowns/FilterDropdown";
import ShopCard from "@/app/components/cards/ShopCard";

type Props = {};

export default function Desks({}: Props) {
	return (
		<main className={catS.mainWithNav}>
			<div className={catS.categoryShopMain}>
				{/* Filter Sidebar */}
				<aside className={catS.filterAside}>
					<h5>Filter</h5>
					{/* Type */}
					<FilterDropdown dropType={"type"} />
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
					<ShopCard />
				</div>
			</div>
		</main>
	);
}
