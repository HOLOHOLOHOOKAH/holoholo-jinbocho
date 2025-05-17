import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./system.module.css";
import Image from "next/image";
import { jinbochoMetadata } from "@/lib/metadata/jinbocho";

const config = {
	shisha: {
		image: {
			src: "/img/jinbocho/shisha.jpg",
			alt: "Color Drink",
			width: 300,
			height: 300,
		},
		items: [
			{ label: "シーシャ", price: "¥1,800" },
			{ label: "ドリンク", price: "¥500〜" },
			{ label: "チャージ", price: "¥700" },
			{ label: "シェア", price: "¥1,000" },
		],
		note: "1台につき2名様まで",
	},
	options: {
		image: {
			src: "/img/jinbocho/shishaTop.jpg",
			alt: "Color Drink",
			width: 300,
			height: 300,
		},
		items: [
			{ label: "トップ替え", price: "¥1,500" },
			{ label: "アイスホース", price: "¥300" },
			{ label: "ジュースボトル", price: "¥700" },
			{ label: "アルコールボトル", price: "¥1,000" },
		],
	},
	wifi: {
		ssid: "Holojinbocho_5G",
		password: "5EEVK33762",
	},
	notes: ["※ フードのみ持ち込み可能 ※シーシャ機材にはお手を触れないようお願い致します。", "※ ボトルやトップ等機材の破損の場合、実費を頂きます。", "※ 混雑時のみお席2時間制となります。"],
};

export const metadata = jinbochoMetadata;

const Homepage: React.FC = () => {
	return (
		<div>
			<Header title="神保町ホロホロシーシャ" page="system-jinbocho" pageName="jinbocho" />
			<div style={{ height: "100px" }}></div>

			<div className={`${styles.menuContainer} container text-white py-5 px-4`}>
				{/* Shisha Section */}
				<div id="shisha" className={styles.menuSection}>
					<div className="d-block d-lg-flex justify-content-center">
						{/* Shisha Image */}
						<div className="d-flex  mx-lg-5 justify-content-center align-items-center">
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
						{/* Options Text */}
						<div className="mx-lg-5">
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

						{/* Options Image */}
						<div className="d-flex mt-mx-0 mt-4 mx-lg-5 justify-content-center align-items-center">
							<div className={styles.customImageContainer}>
								<div className={styles.greenBorderStack}></div>
								<div className={styles.stackedContainer}>
									<Image src={config.options.image.src} alt={config.options.image.alt} width={config.options.image.width} height={config.options.image.height} className={`${styles.drinkImage} ${styles.imageHover}`} />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-bottom container mt-5 mb-5"></div>

				<div className="d-block d-md-flex justify-content-center">
					{/* Notes Section */}
					<div id="notes" style={{ maxWidth: "600px" }} className={`${styles.menuSection} small text-center mx-md-5`}>
						<div className={`${styles.sectionTitle}  justify-content-center justify-content-md-start`}>Notes</div>
						{config.notes.map((note, index) => (
							<p className="text-center text-md-start" key={index}>
								{note}
							</p>
						))}
					</div>

					{/* Wi-Fi Section */}
					<div id="wifi" className={`${styles.menuSection} small text-center  mx-md-5`}>
						<div className={`${styles.sectionTitle} justify-content-center`}>Wi-Fi</div>
						<p>SD: {config.wifi.ssid}</p>
						<p>PW: {config.wifi.password}</p>
					</div>
				</div>
			</div>

			<Footer page="jinbocho" />
		</div>
	);
};

export default Homepage;
