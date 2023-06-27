"use client";
import React, { useEffect, useState } from "react";
import sDropS from "../../../styles/ShopFilterDrops.module.scss";
import { CaretUp } from "@phosphor-icons/react";

type Props = {};

const options = ["Under $200", "$200 to 300", "$300 to 500", "Above $500"];

export default function PriceDrop() {
	const [dropActiveStyle, setDropActiveStyle] = useState(sDropS.inactive);
	const [selectedOptions, setSelectedOptions] = useState<any>([]);
	const [isOpen, setIsOpen] = useState(false);

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
		<section className={`${sDropS.dropDownMain} ${dropActiveStyle}`}>
			<button className={sDropS.dropToggleBtn} onClick={toggleIsOpen}>
				<h6 className={sDropS.dropToggleBtnText}>PRICE</h6>
				<CaretUp
					size={24}
					style={
						!isOpen
							? { transform: "rotate(180deg)", transition: "all 0.25s" }
							: { transform: "rotate(0deg)", transition: "all 0.25s" }
					}
				/>
			</button>
			{/* Content */}
			{/* Checkboxes */}
			<div className={sDropS.checkboxMenu}>
				{/* Inputs */}
				<div className={sDropS.numberMenu}>
					<label htmlFor="minIn" className={sDropS.numberLabel}>
						$
					</label>
					<input
						inputMode="numeric"
						pattern="[0-9]+"
						id="minIn"
						placeholder="Min"
						className={sDropS.numberInput}
					/>
					<label htmlFor="maxIn" className={sDropS.numberLabel}>
						$
					</label>
					<input
						inputMode="numeric"
						pattern="[0-9]+"
						id="maxIn"
						placeholder="Max"
						className={sDropS.numberInput}
					/>
				</div>
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
