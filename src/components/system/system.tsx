import React from "react";
import styles from "./system.module.css";
import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

type Title = "神保町ホロホロシーシャ" | "湯島ホロホロシーシャ 上野・御徒町店";

export type SystemConfig = {
	shisha: {
		image: {
			src: string;
			alt: string;
			width: number;
			height: number;
		};
		items: Array<{
			label: string;
			price: string;
		}>;
		note: string;
	};
	options: {
		image: {
			src: string;
			alt: string;
			width: number;
			height: number;
		};
		items: Array<{
			label: string;
			price: string;
		}>;
	};
	wifi: {
		ssid: string;
		password: string;
	};
	notes: string[];
};

interface SystemPageProps {
	config: SystemConfig;
	page: "jinbocho" | "okachimachi";
	title: Title;
}

const SystemPage: React.FC<SystemPageProps> = ({ config, page, title }) => {
	return (
		<div>
			<Header title={title} page="homepage" pageName={page} />
			<div style={{ height: "100px" }}></div>

			<div className={`${styles.menuContainer} container text-white py-5 px-4`}>
				{/* Shisha Section */}
				<div id="shisha" className={styles.menuSection}>
					<div className="d-block d-lg-flex justify-content-center">
						{/* Shisha Image */}
						<div className="d-flex mx-lg-5 justify-content-center align-items-center">
							<div className={styles.customImageContainer}>
								<div className={styles.greenBorderStack}></div>
								<div className={styles.stackedContainer}>
									<Image src={config.shisha.image.src} alt={config.shisha.image.alt} width={config.shisha.image.width} height={config.shisha.image.height} className={`${styles.drinkImage} ${styles.imageHover}`} />
								</div>
							</div>
						</div>

						{/* Shisha Text */}
						<div className="mx-lg-5">
							<div className="d-flex justify-content-center justify-content-lg-start align-items-center h-100">
								<div>
									<div className={`${styles.sectionTitle} justify-content-center`}>Shisha</div>
									<div className="d-flex text-justify justify-content-center align-items-center">
										<div>
											{config.shisha.items.map((item, index) => (
												<p key={index}>
													{item.label} <span style={{ color: "grey" }}>..............................</span> {item.price}
												</p>
											))}
											<p className="text-center">{config.shisha.note}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-bottom container mt-5 mb-5"></div>

				{/* Options Section */}
				<div id="options" className={styles.menuSection}>
					<div className="d-block d-lg-flex justify-content-center">
						{/* Options Image */}
						<div className="order-lg-2 d-flex mt-mx-0 mt-4 mx-lg-5 justify-content-center align-items-center">
							<div className={styles.customImageContainer}>
								<div className={styles.greenBorderStack}></div>
								<div className={styles.stackedContainer}>
									<Image src={config.options.image.src} alt={config.options.image.alt} width={config.options.image.width} height={config.options.image.height} className={`${styles.drinkImage} ${styles.imageHover}`} />
								</div>
							</div>
						</div>

						{/* Options Text */}
						<div className="mx-lg-5 order-lg-1">
							<div className="d-flex justify-content-center align-items-center h-100">
								<div>
									<div className={`${styles.sectionTitle} justify-content-center`}>Options</div>
									<div className="d-flex text-center justify-content-center align-items-center">
										<div>
											{config.options.items.map((item, index) => (
												<p key={index}>
													{item.label} <span style={{ color: "grey" }}>...........................</span> {item.price}
												</p>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-bottom container mt-5 mb-5"></div>

				<div id="wifi" className="d-block d-lg-flex justify-content-center">
					{/* Notes Section */}
					<div style={{ maxWidth: "600px" }} className={`${styles.menuSection} small text-center mx-lg-5`}>
						<div className={`${styles.sectionTitle} justify-content-center justify-content-lg-start`}>Notes</div>
						{config.notes.map((note, index) => (
							<p className="text-center text-lg-start" key={index}>
								{note}
							</p>
						))}
					</div>

					{/* Wi-Fi Section */}
					<div className={`${styles.menuSection} small text-center mx-lg-5`}>
						<div className={`${styles.sectionTitle} justify-content-center`}>Wi-Fi</div>
						<p>SD: {config.wifi.ssid}</p>
						<p>PW: {config.wifi.password}</p>
					</div>
				</div>
			</div>

			<Footer page={page} />
		</div>
	);
};

export default SystemPage;
