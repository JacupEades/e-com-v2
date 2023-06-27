"use client";
import React, { useEffect, useState } from "react";
import sDropS from "../../../styles/ShopFilterDrops.module.scss";
import { CaretUp, Star } from "@phosphor-icons/react";
import Link from "next/link";

type Props = {};

export default function ShippingDrop() {
	const [dropActiveStyle, setDropActiveStyle] = useState(sDropS.active);
	const [selectedOptions, setSelectedOptions] = useState<any>([]);
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		if (isOpen === true) {
			setDropActiveStyle(sDropS.active);
		} else {
			setDropActiveStyle(sDropS.inactive);
		}
	}, [isOpen]);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
		console.log("isOpen:", !isOpen);
	};

	const handleOptionToggle = (option: any) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(
				selectedOptions.filter((item: any) => item !== option)
			);
		} else {
			setSelectedOptions([...selectedOptions, option]);
		}
	};

	return (
		<section className={`${sDropS.dropDownMainShipping} ${dropActiveStyle}`}>
			<button className={sDropS.dropToggleBtn} onClick={toggleIsOpen}>
				<h6 className={sDropS.dropToggleBtnText}>SHIPPING</h6>
				<CaretUp
					size={24}
					style={
						!isOpen
							? { transform: "rotate(180deg)", transition: "all 0.25s" }
							: { transform: "rotate(0deg)", transition: "all 0.25s" }
					}
				/>
			</button>
			<div className={sDropS.checkboxMenu}>
				<p className={sDropS.shippingP}>
					to <Link href={"#3andUp"}>Lynchburg – 24501</Link>
				</p>
				<div className={sDropS.checkboxContent}>
					<input
						type="checkbox"
						id={"2day"}
						checked={selectedOptions.includes("2day")}
						onChange={() => handleOptionToggle("2day")}
						className={sDropS.checkboxInput}
					/>
					<label htmlFor={"2day"} className={sDropS.checkboxLabel}>
						Within 2 days (by May 26)
					</label>
				</div>
				<div className={sDropS.checkboxContent}>
					<input
						type="checkbox"
						id={"5day"}
						checked={selectedOptions.includes("5day")}
						onChange={() => handleOptionToggle("5day")}
						className={sDropS.checkboxInput}
					/>
					<label htmlFor={"5day"} className={sDropS.checkboxLabel}>
						Within 5 days (by May 29)
					</label>
				</div>
			</div>
		</section>
	);
}
