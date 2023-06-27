"use client";
import React, { useEffect, useState } from "react";
import sDropS from "../../../styles/ShopFilterDrops.module.scss";
import { CaretUp } from "@phosphor-icons/react";

type Props = {};

const options = [
	{ label: "Brown", color: "#964B00" },
	{ label: "White", color: "#FFFFFF" },
	{ label: "Gray", color: "#808080" },
	{ label: "Beige", color: "#F5F5DC" },
	{ label: "Black", color: "#000000" },
	{ label: "Green", color: "#008000" },
	{ label: "Blue", color: "#0000FF" },
	{ label: "Red", color: "#FF0000" },
];

export default function ColorDrop() {
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
		<section className={`${sDropS.dropDownMainColor} ${dropActiveStyle}`}>
			<button className={sDropS.dropToggleBtn} onClick={toggleIsOpen}>
				<h6 className={sDropS.dropToggleBtnText}>COLOR</h6>
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
			<div className={sDropS.colorMenu}>
				{options.map((option, i) => {
					return (
						<div key={i} className={sDropS.colorContent}>
							<input
								type="checkbox"
								id={option.label}
								checked={selectedOptions.includes(option.label)}
								onChange={() => handleOptionToggle(option.label)}
								className={sDropS.colorInput}
							/>
							<label
								htmlFor={option.label}
								className={`${sDropS.colorLabel} ${sDropS[`colorLabel${i}`]}`}>
								{option.label}
							</label>
						</div>
					);
				})}
			</div>
		</section>
	);
}
