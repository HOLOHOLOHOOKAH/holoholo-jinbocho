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
				{/* You can add overlay content here */}

				<div className="container position-relative z-1 h-100">
					<div className="row h-100 align-items-center">
						<div className="col-12 d-flex justify-content-center align-items-center">
							<Image 
								loading="eager" 
								style={{ height: height, width: width }} 
								className="position-relative fade-in heroImg" 
								src={img} 
								alt="Logo" 
								width={230} 
								height={230} 
							/>
						</div>
					</div>
				</div>

				<div className="scroll-progress">
					<div className="progress-text">Scroll</div>
					<div className="progress-track">
						<div className="progress-bar"></div>
					</div>
				</div>
			</div>
			<div className="position-absolute w-100 white-line"></div>
		</>
	);
};

export default Hero;
