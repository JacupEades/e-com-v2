import React from "react";
import catS from "../../styles/Shop.module.scss";
import { CaretUp } from "@phosphor-icons/react";

type Props = {
	dropType: string;
};

export default function FilterDropdown({ dropType }: Props) {
	return (
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
	);
}
