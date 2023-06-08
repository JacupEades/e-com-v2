"use client";
import { useEffect } from "react";
import homeS from "../../styles/Home.module.scss";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

type Props = {};

export default function HomeCarousel({}: Props) {
	useEffect(() => {
		const carButtons = document.querySelectorAll<HTMLButtonElement>(
			"[data-carousel-button]"
		);

		if (carButtons !== null) {
			carButtons.forEach((button) => {
				button.addEventListener("click", () => {
					const offset = button.dataset.carouselButton === "next" ? 1 : -1;
					const slides = button
						.closest<HTMLElement>("[data-carousel]")
						?.querySelector<HTMLElement>("[data-slides]");
					const activeSlide =
						slides?.querySelector<HTMLElement>("[data-active]");
					const slideChildren = Array.from(slides?.children || []);
					let newIdex = slideChildren.indexOf(activeSlide as Element) + offset;
					if (newIdex < 0) newIdex = slides!.children.length - 1;
					if (newIdex >= slides!.children.length) newIdex = 0;

					(slideChildren[newIdex] as HTMLElement).dataset.active = "true";
					delete activeSlide?.dataset.active;
				});
			});
		}
	}, []);

	return (
		<section className={homeS.carousel} data-carousel>
			{/* controls/buttons */}
			<button className={homeS.rightCarBtn} data-carousel-button>
				<CaretRight size={48} />
			</button>
			<button className={homeS.leftCarBtn} data-carousel-button>
				<CaretLeft size={48} />
			</button>
			<ul data-slides>
				<li data-active>
					{/* left */}
					<div className={homeS.carouselSVG1}></div>
					{/* right */}
					<div className={homeS.carouselRight}>
						<div className={homeS.carQuotesTop} />
						<h6>CUSTOMER REVIEW</h6>
						<div className={homeS.carDetailed}>
							{/* <p>STAR STAR STAR STAR</p>
							<p>Emily Smith</p>
							<CheckCircle size={20} weight="fill" /> */}
							<h1>Slide 1</h1>
						</div>
						<div className={homeS.carQuotesBot} />
					</div>
				</li>
				<li>
					{/* left */}
					<div className={homeS.carouselSVG2}></div>
					{/* right */}
					<div className={homeS.carouselRight}>
						<div className={homeS.carQuotesTop} />
						<h6>CUSTOMER REVIEW</h6>
						<div className={homeS.carDetailed}>
							{/* <p>STAR STAR STAR STAR</p>
							<p>Emily Smith</p>
							<CheckCircle size={20} weight="fill" /> */}
							<h1>Slide 2</h1>
						</div>
						<div className={homeS.carQuotesBot} />
					</div>
				</li>
				<li>
					{/* left */}
					<div className={homeS.carouselSVG3}></div>
					{/* right */}
					<div className={homeS.carouselRight}>
						<div className={homeS.carQuotesTop} />
						<h6>CUSTOMER REVIEW</h6>
						<div className={homeS.carDetailed}>
							{/* <p>STAR STAR STAR STAR</p>
							<p>Emily Smith</p>
							<CheckCircle size={20} weight="fill" /> */}
							<h1>Slide 3</h1>
						</div>
						<div className={homeS.carQuotesBot} />
					</div>
				</li>
			</ul>
		</section>
	);
}
