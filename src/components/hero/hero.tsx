import Image from "next/image";
import "./hero.css";

interface HeroProps {
	img: string;
	height: number;
	width: number;
	video: string;
}

const Hero: React.FC<HeroProps> = ({ img, height, width, video }) => {
	return (
		<>
			<div id="home" className="hero section dark-background">
				<video src={video} autoPlay playsInline loop muted className="hero-video z-0 position-absolute"></video>

				<div className="container position-relative z-1">
					<div className="row">
						<div className="position-relative d-flex justify-content-center">
							<Image loading="eager" style={{ height: height, width: width, top: "30%" }} className="position-relative fade-in" src={img} alt="Logo" width={230} height={230} />
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
