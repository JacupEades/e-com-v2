"use client";
import React, { useEffect, useState } from "react";
import sDropS from "../../../styles/ShopFilterDrops.module.scss";
import { CaretUp, Star } from "@phosphor-icons/react";

type Props = {};

export default function RatingDrop() {
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
		<section className={`${sDropS.dropDownMainRating} ${dropActiveStyle}`}>
			<button className={sDropS.dropToggleBtn} onClick={toggleIsOpen}>
				<h6 className={sDropS.dropToggleBtnText}>RATING</h6>
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
				<div className={sDropS.checkboxContent}>
					<input
						type="checkbox"
						id={"5"}
						checked={selectedOptions.includes("5")}
						onChange={() => handleOptionToggle("5")}
						className={sDropS.checkboxInput}
					/>
					<label htmlFor={"5"} className={sDropS.checkboxLabel}>
						<div className={sDropS.ratingStars}>
							{[...Array(5)].map((_, index) => (
								<Star key={index} size={20} weight="fill" />
							))}
						</div>
					</label>
				</div>
				<div className={sDropS.checkboxContent}>
					<input
						type="checkbox"
						id={"4andUp"}
						checked={selectedOptions.includes("4andUp")}
						onChange={() => handleOptionToggle("4andUp")}
						className={sDropS.checkboxInput}
					/>
					<label htmlFor={"4andUp"} className={sDropS.checkboxLabel}>
						<div className={sDropS.ratingStars}>
							{[...Array(4)].map((_, index) => (
								<Star key={index} size={20} weight="fill" />
							))}
							<Star size={20} />
						</div>{" "}
						& up
					</label>
				</div>
				<div className={sDropS.checkboxContent}>
					<input
						type="checkbox"
						id={"3andUp"}
						checked={selectedOptions.includes("3andUp")}
						onChange={() => handleOptionToggle("3andUp")}
						className={sDropS.checkboxInput}
					/>
					<label htmlFor={"3andUp"} className={sDropS.checkboxLabel}>
						<div className={sDropS.ratingStars}>
							{[...Array(3)].map((_, index) => (
								<Star key={index} size={20} weight="fill" />
							))}
							{[...Array(2)].map((_, index) => (
								<Star key={index} size={20} />
							))}
						</div>{" "}
						& up
					</label>
				</div>
				<div className={sDropS.checkboxContent}>
					<input
						type="checkbox"
						id={"all"}
						checked={selectedOptions.includes("all")}
						onChange={() => handleOptionToggle("all")}
						className={sDropS.checkboxInput}
					/>
					<label htmlFor={"all"} className={sDropS.checkboxLabel}>
						All reviewed products
					</label>
				</div>
			</div>
		</section>
	);
}
