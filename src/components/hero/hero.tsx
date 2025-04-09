import Image, { StaticImageData } from "next/image";

import "./hero.css";

interface HeroProps {
	img?: StaticImageData;
}

const Hero: React.FC<HeroProps> = () => {
	return (
		<>
			<div id="home" className="hero section dark-background">
				<video src="/img/jinbocho/video.mp4" autoPlay playsInline loop muted className="hero-video z-0 position-absolute"></video>

				<div className="container position-relative z-1">
					<div className="row">
						<div className="position-relative d-flex justify-content-center">
							<Image loading="eager" style={{ height: "600px", width: "600px" }} className="position-relative fade-in" src="/img/jinbocho/logo.png" alt="Logo" width={230} height={230} />
						</div>
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
