import Image from "next/image";
import styles from "./drinksFood.module.css";
import { FC } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { holoHoloMetadata } from "@/lib/metadata/holoHolo";

export const metadata = holoHoloMetadata;

const config = {
	liqueurs: ["ジン", "ウォッカ", "テキーラ", "ラム", "カンパリ", "カシス", "ピーチ", "マリブ", "ウイスキー", "知多 (¥1000)"],
	beer: ["生ビール", "コロナ・エキストラ", "バドワイザー", "ハイネケン", "スミノフアイス", "スミノフレモネード", "スミノフワイルドグレープ"],
	liqueurImage: {
		src: "/img/okachimachi/corona.jpg",
		alt: "Beer",
		width: 300,
		height: 300,
	},
	otherDrinks: ["テキーラショット", "イエガーショット (¥800)", "シャンパン ヴーヴクリコ (¥18000)", "シャンパン モエ (¥15000)"],
	snackImage: {
		src: "/img/okachimachi/shots.jpg",
		alt: "Liqueur",
		width: 300,
		height: 300,
	},
};

const Homepage: FC = () => {
	return (
		<div className="fade-in">
			<div className={styles.spacer}></div>

			<Header title="湯島ホロホロシーシャ 上野・御徒町店" page="homepage" pageName="okachimachi" />

			<div id="bottle-beer" className={`${styles.container} container`}>
				<div className="pb-3">
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
							<div className={` d-flex text-center justify-content-center align-items-center`}>
								<div>
									<div className="row">
										<div className="col-12">
											<div className={`${styles.sectionTitle} justify-content-center justify-content-lg-start`}>Bottle/Beer</div>
											<div className={`${styles.sectionText} mt-4 text-lg-start text-center`}>
												<ul className={`${styles.sectionText} text-center text-lg-start list-unstyled mb-0`} style={{ columns: 2 }}>
													{config.beer.map((item, index) => (
														<li key={index}>
															<strong>{item}</strong>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
									<div className={`${styles.price} mt-4 text-center text-lg-start`}>¥800</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="border-bottom container mt-4"></div>

			<div id="liqueur" className={`${styles.container} container mt-4`}>
				<div className="pb-3">
					<div className={`${styles.drinkCard} w-100 pt-3`}>
						<div className="d-block d-lg-flex justify-content-center">
							{/* Snacks Image */}
							<div className={`order-lg-2 mx-lg-5 d-flex justify-content-center align-items-center`}>
								<div className={styles.customImageContainer}>
									<div className={styles.greenBorderStack}></div>
									<div className={styles.stackedContainer}>
										<Image src={config.snackImage.src} alt={config.snackImage.alt} width={config.snackImage.width} height={config.snackImage.height} className={`${styles.drinkImage} ${styles.imageHover}`} />
									</div>
								</div>
							</div>

							{/* Snacks Text */}
							<div className="order-lg-1 mx-lg-5 d-flex justify-content-center justify-content-lg-end align-items-center">
								<div>
									<div className={`${styles.sectionTitle} justify-content-center justify-content-lg-end`}>Liqueur</div>
									<div className={styles.sectionText}>
										<div className="text-center text-lg-end mb-5">
											<div className="row">
												<div className="col-12">
													<ul className={`${styles.sectionText} text-center text-lg-end list-unstyled mb-0`} style={{ columns: 2 }}>
														{config.liqueurs.map((item, index) => (
															<li key={index}>
																<strong>{item}</strong>
															</li>
														))}
													</ul>
												</div>
												<div className={`${styles.price} mt-4 text-center text-lg-end`}>¥800</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border-bottom container mt-4"></div>

			<div id="other-drinks" style={{ maxWidth: "900px" }} className={`${styles.container} container mt-4 mb-4`}>
				{/* Other Drinks */}
				<div className="col-12 pt-3 mb-3">
					<div className={`${styles.drinkCard} text-center`}>
						<div className={`${styles.sectionTitle} justify-content-center`}>Other Drinks</div>
						<div className="row">
							<div className="col-md-12">
								<ul className={`${styles.sectionText}  text-center list-unstyled`}>
									{config.otherDrinks.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer page="okachimachi" />
		</div>
	);
};

export default Homepage;
