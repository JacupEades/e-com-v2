"use client";
import { useEffect } from "react";
import styles from "../../styles/Main.module.scss";
import { CaretLeft, CaretRight, CheckCircle } from "@phosphor-icons/react";

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
		<section className={styles.carousel} data-carousel>
			{/* controls/buttons */}
			<button className={styles.rightCarBtn} data-carousel-button>
				<CaretRight size={48} />
			</button>
			<button className={styles.leftCarBtn} data-carousel-button>
				<CaretLeft size={48} />
			</button>
			<ul data-slides>
				<li data-active>
					{/* left */}
					<div className={styles.carouselSVG1}></div>
					{/* right */}
					<div className={styles.carouselRight}>
						<div className={styles.carQuotesTop} />
						<h6>CUSTOMER REVIEW</h6>
						<div className={styles.carDetailed}>
							{/* <p>STAR STAR STAR STAR</p>
							<p>Emily Smith</p>
							<CheckCircle size={20} weight="fill" /> */}
							<h1>Slide 1</h1>
						</div>
						<div className={styles.carQuotesBot} />
					</div>
				</li>
				<li>
					{/* left */}
					<div className={styles.carouselSVG2}></div>
					{/* right */}
					<div className={styles.carouselRight}>
						<div className={styles.carQuotesTop} />
						<h6>CUSTOMER REVIEW</h6>
						<div className={styles.carDetailed}>
							{/* <p>STAR STAR STAR STAR</p>
							<p>Emily Smith</p>
							<CheckCircle size={20} weight="fill" /> */}
							<h1>Slide 2</h1>
						</div>
						<div className={styles.carQuotesBot} />
					</div>
				</li>
				<li>
					{/* left */}
					<div className={styles.carouselSVG3}></div>
					{/* right */}
					<div className={styles.carouselRight}>
						<div className={styles.carQuotesTop} />
						<h6>CUSTOMER REVIEW</h6>
						<div className={styles.carDetailed}>
							{/* <p>STAR STAR STAR STAR</p>
							<p>Emily Smith</p>
							<CheckCircle size={20} weight="fill" /> */}
							<h1>Slide 3</h1>
						</div>
						<div className={styles.carQuotesBot} />
					</div>
				</li>
			</ul>
		</section>
	);
}
