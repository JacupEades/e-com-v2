"use client";
import React, { useEffect, useState } from "react";
import sDropS from "../../../styles/ShopFilterDrops.module.scss";
import { CaretUp } from "@phosphor-icons/react";

type Props = {};

const options = [
	"Standard Desks",
	"Height Adjustable Desks",
	"Wall Mounted/Ladder Desks",
	"Laptop/Compact Desks",
	"L-Shaped Desks",
];

export default function TypeDrop() {
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
		<section className={`${sDropS.dropDownMainType} ${dropActiveStyle}`}>
			<button className={sDropS.dropToggleBtn} onClick={toggleIsOpen}>
				<h6 className={sDropS.dropToggleBtnText}>TYPE</h6>
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
				{options.map((option) => (
					<div key={option} className={sDropS.checkboxContent}>
						<input
							type="checkbox"
							id={option}
							checked={selectedOptions.includes(option)}
							onChange={() => handleOptionToggle(option)}
							className={sDropS.checkboxInput}
						/>
						<label htmlFor={option} className={sDropS.checkboxLabel}>
							{option}
						</label>
					</div>
				))}
			</div>
		</section>
	);
}
