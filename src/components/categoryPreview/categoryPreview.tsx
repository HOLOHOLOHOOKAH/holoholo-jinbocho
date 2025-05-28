"use client";
import React, { useEffect, useRef, useState } from "react";
import "./categoryPreview.css";
import Image from "next/image";

interface CategoryPreviewProps {
	reverse?: boolean;
	title?: string;
	paragraph?: string;
	buttonText?: string;
	buttonLink?: string;
	imageSrc?: string;
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ reverse = false, title = "About Us", paragraph = "Don't miss out on this exotic fusion of cultures! We serve dishes from all over the Mediterranean...", buttonText = "Book now", buttonLink = "#", imageSrc = "https://placehold.co/400" }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsVisible(entry.isIntersecting);
				});
			},
			{ threshold: 0.1 }
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={containerRef} className="container section-category">
			<div className="row align-items-center">
				{/* Image Column */}
				<div className={`col-md-6 text-center mb-5 mt-5 pb-0 pt-0 pt-md-0 pb-md-0 mb-md-0 mt-md-0 ${reverse ? "order-md-2" : "order-md-1"} ${isVisible ? "image-visible" : "image-hidden"}`}>
					<div className="custom-image-container">
						<div className="green-border-stack"></div>
						<div className="stacked-container">
							<Image height={500} width={300} src={imageSrc} alt={title} />
						</div>
					</div>
				</div>

				{/* Content Column */}
				<div className={`col-md-6 ${reverse ? "order-md-1" : "order-md-2"} ${isVisible ? "content-visible" : "content-hidden"}`}>
					<p className="green-underline">{title}</p>
					<p className="paragraph-text">{paragraph}</p>
					<a href={buttonLink}>
						<button className="btn custom-btn mt-3">{buttonText}</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default CategoryPreview;
