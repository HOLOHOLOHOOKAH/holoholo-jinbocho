import React from "react";
import "./categoryPreview.css";

interface CategoryPreviewProps {
	reverse?: boolean;
	title?: string;
	paragraph?: string;
	buttonText?: string;
	buttonLink?: string;
	imageSrc?: string; // New prop to specify the image source
	hasBackgroundImage?: boolean; // New prop to control the background image
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
	reverse = false,
	title = "About Us",
	paragraph = "Don’t miss out on this exotic fusion of cultures! We serve dishes from all over the Mediterranean, including Turkey, Greece, Spain, and Italy. The chefs who created these wonders have decades of experience working in these lands. The kitchen is gorgeous in every way.",
	buttonText = "Book now",
	buttonLink = "#",
	imageSrc = "https://placehold.co/400", // Default image URL
	hasBackgroundImage = false, // Default value for the background image flag
}) => {
	return (
		<div
			style={{
				backgroundImage: hasBackgroundImage ? "url('/img/fabric.png')" : "none",
			}}
			className="container section-category"
		>
			<div className="row align-items-center">
				{/* Image Column */}
				<div className={`col-md-6 text-center mb-4 mb-md-0 ${reverse ? "order-md-2" : "order-md-1"}`}>
					<div className="custom-image-container">
						<div className="green-border-stack"></div>
						<div className="stacked-container">
							<img src={imageSrc} alt="Lounge" />
						</div>
					</div>
				</div>

				{/* Content Column */}
				<div className={`col-md-6 ${reverse ? "order-md-1" : "order-md-2"}`}>
					<p className="green-underline">{title}</p>
					<p>{paragraph}</p>
					<a href={buttonLink}>
						<button className="btn custom-btn mt-3">{buttonText}</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default CategoryPreview;
