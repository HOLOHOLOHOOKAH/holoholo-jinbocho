import Image from "next/image";

import "./hero.css";

interface HeroProps {
	img: string;
	height: number;
	width: number;
	video: string;
}

const Hero: React.FC<HeroProps> = ({ img, height, width, video }) => {
	const isVideo = video.match(/\.(mp4|webm|ogg)$/i); // Add other formats as needed

	return (
		<>
			<div id="home" className="hero section dark-background">
				{isVideo ? <video src={video} autoPlay playsInline loop muted className="hero-video z-0 absolute" /> : <Image src={video} alt="Hero" className="hero-video z-0 absolute object-fit-cover" height={1080} width={1920} />}

				<div className="container position-relative z-1">
					<div className="logo-container">
						{" "}
						{/* Add this wrapper */}
						<Image loading="eager" style={{ height, width }} className="fade-in heroImg" src={img} alt="Logo" width={width} height={height} />
					</div>
				</div>

				<div style={{ textShadow: "rgb(0 0 0) 3px 2px 5px" }} className="scroll-down mb-3 z-3 w-100">
					Scroll ↓
				</div>
			</div>

			<div className="position-absolute w-100 white-line"></div>
		</>
	);
};

export default Hero;
