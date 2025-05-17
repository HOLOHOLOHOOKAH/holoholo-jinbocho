import Image from "next/image";
import styles from "./drinksFood.module.css";
import { FC } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { jinbochoMetadata } from "@/lib/metadata/jinbocho";
const config = {
	liqueurs: ["ジン", "ウォッカ", "ピーチ", "マリブ", "グリーンバナナ", "カルーア", "アマレット", "ティフィン", "焼酎（甲類）"],
	liqueurNote: "※ソフトドリンクからお好きな割り材をお選びください。",
	beer: {
		name: "ハイネケン",
		price: "¥800〜",
	},
	liqueurImage: {
		src: "/img/jinbocho/drinks.jpeg",
		alt: "Color Drink",
		width: 300,
		height: 300,
	},
	snacks: [
		{ name: "ポップコーン", price: "¥500" },
		{ name: "チョコレート", price: "¥300" },
		{ name: "マシュマロ＆ビスケット", price: "¥300" },
		{ name: "燻製ミックスナッツ", price: "¥500" },
	],
	snackImage: {
		src: "/img/jinbocho/drinksimg.jpg",
		alt: "Fruit Tea",
		width: 300,
		height: 300,
	},
};

export const metadata = jinbochoMetadata;

const Homepage: FC = () => {
	return (
		<div className="fade-in">
			<div className={styles.spacer}></div>

			<Header title="神保町ホロホロシーシャ" page="drinksFood-jinbocho" pageName="jinbocho" />

			<div id="liqueur-beer" className={`${styles.container} container`}>
				<div className=" pb-3">
					<div className={`${styles.drinkCard} w-100 pt-3`}>
						<div className="d-block d-lg-flex justify-content-center">
							{/* Image Section */}
							<div className="mx-lg-5">
								<div className={styles.customImageContainer}>
									<div className={styles.greenBorderStack}></div>
									<div className={styles.stackedContainer}>
										<Image src={config.liqueurImage.src} alt={config.liqueurImage.alt} width={config.liqueurImage.width} height={config.liqueurImage.height} className={`${styles.drinkImage} ${styles.imageHover}`} />
									</div>
								</div>
							</div>

							{/* Text Section */}
							<div className="mx-lg-5">
								<div className="row">
									<div className="col-12">
										<div className={styles.sectionTitle}>Liqueur</div>
										<ul className={`${styles.sectionText} list-unstyled mb-0`} style={{ columns: 2 }}>
											{config.liqueurs.map((item, index) => (
												<li key={index}>
													<strong>{item}</strong>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className="d-flex justify-content-center w-100">
									<p style={{ maxWidth: "400px" }} className={`${styles.sectionText} mt-4 text-center`}>
										{config.liqueurNote}
									</p>
								</div>

								<div className={styles.sectionTitle}>Beer</div>
								<p className={`${styles.sectionText} mt-4 text-md-start text-center`}>
									<strong>{config.beer.name} </strong> <span style={{ color: "grey" }}>..............</span> {config.beer.price}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="border-bottom container mt-4 mt-lg-5"></div>

			<div id="snacks" className={`${styles.container} container mt-4 mb-3 mt-lg-5`}>
				<div className="pb-3">
					<div className={`${styles.drinkCard} w-100 pt-3`}>
						<div className="d-block d-lg-flex justify-content-center">
							{/* Snacks Image */}
							<div className=" order-lg-2 mx-lg-5">
								<div className={styles.customImageContainer}>
									<div className={styles.greenBorderStack}></div>
									<div className={styles.stackedContainer}>
										<Image src={config.snackImage.src} alt={config.snackImage.alt} width={config.snackImage.width} height={config.snackImage.height} className={`${styles.drinkImage} ${styles.imageHover}`} />
									</div>
								</div>
							</div>

							{/* Snacks Text */}
							<div className=" order-lg-1 mx-lg-5 d-flex justify-content-center justify-content-md-end align-items-center">
								<div>
									<div className={`${styles.sectionTitle} justify-content-center justify-content-md-end`}>Snacks</div>
									<div className={styles.sectionText}>
										<div className="text-center text-md-end mb-5">
											{config.snacks.map((snack, index) => (
												<p key={index}>
													{snack.name} <span style={{ color: "grey" }}>.............</span> {snack.price}
												</p>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer page="jinbocho" />
		</div>
	);
};

export default Homepage;
