import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./system.module.css";
import Image from "next/image";
import { holoHoloMetadata } from "@/lib/metadata/holoHolo";
export const metadata = holoHoloMetadata;

const config = {
	shisha: {
		image: {
			src: "/img/okachimachi/shisha.jpg",
			alt: "Color Drink",
			width: 300,
			height: 300,
		},
		items: [
			{ label: "シーシャ", price: "¥1,800" },
			{ label: "ドリンク", price: "¥500〜" },
			{ label: "チャージ", price: "¥700" },
			{ label: "深夜チャージ ", price: "¥500" },
			{ label: "22時以降のご滞在)", price: "" },

			{ label: "シェア", price: "¥1,000" },
		],
		note: "1台につき2名様まで",
	},
	options: {
		image: {
			src: "/img/okachimachi/shishaTop.jpg",
			alt: "Color Drink",
			width: 300,
			height: 300,
		},
		items: [
			{ label: "トップ替え", price: "¥1,500" },
			{ label: "アイスホース", price: "¥300" },
			{ label: "ジュースボトル", price: "¥500" },
			{ label: "アルコールボトル", price: "¥1,000" },
		],
	},
	wifi: {
		ssid: "HOLO HOLO",
		password: "smokebase1",
	},
	notes: ["※ シーシャ機材にはお手を触れないようにお願い致します。", "※ ボトルやトップ破損の場合実費を頂きます。", "※ フードのみ持ち込み可能です。"],
};

const Homepage: React.FC = () => {
	return (
		<div className="fade-in">
			<Header title="湯島ホロホロシーシャ 上野・御徒町店" page="system-jinbocho" pageName="okachimachi" />
			<div style={{ height: "130px" }}></div>

			<h1 className="d-flex justify-content-center default-txt-color">システム</h1>
			<div className="border-bottom container mt-3 mb-3 mt-md-5 mb-md-5"></div>

			<div className={`${styles.menuContainer} container text-white py-5 px-4`}>
				{/* Shisha Section */}
				<div id="shisha" className={styles.menuSection}>
					<div className="row">
						{/* Shisha Image */}
						<div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
							<div className={styles.customImageContainer}>
								<div className={styles.greenBorderStack}></div>
								<div className={styles.stackedContainer}>
									<Image src={config.shisha.image.src} alt={config.shisha.image.alt} width={config.shisha.image.width} height={config.shisha.image.height} className={`${styles.drinkImage} ${styles.imageHover}`} />
								</div>
							</div>
						</div>

						{/* Shisha Text */}
						<div className="col-12 col-md-6">
							<div className="d-flex justify-content-center justify-content-md-start align-items-center h-100">
								<div>
									<div className={`${styles.sectionTitle} justify-content-center`}>Shisha</div>
									<div className="d-flex text-justify justify-content-center align-items-center">
										<div>
											{config.shisha.items.map((item, index) => (
												<p key={index}>
													{item.label} {item.price !== "" && <span style={{ color: "grey" }}>..............................</span>} {item.price}
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
					<div className="row">
						{/* Options Text */}
						<div className="col-12 col-md-6">
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
						<div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
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

				{/* Wi-Fi Section */}
				<div id="wifi" className={`${styles.menuSection} small text-center`}>
					<div className={`${styles.sectionTitle} justify-content-center`}>Wi-Fi</div>
					<p>SD: {config.wifi.ssid}</p>
					<p>PW: {config.wifi.password}</p>
				</div>

				{/* Notes Section */}
				<div id="notes" className={`${styles.menuSection} small text-center`}>
					<div className={`${styles.sectionTitle} justify-content-center`}>Notes</div>
					{config.notes.map((note, index) => (
						<p key={index}>{note}</p>
					))}
				</div>
			</div>

			<Footer page="jinbocho" />
		</div>
	);
};

export default Homepage;
