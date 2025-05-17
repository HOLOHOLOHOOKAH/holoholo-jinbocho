import Image from "next/image";
import styles from "./softDrinks.module.css";
import { FC } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { holoHoloMetadata } from "@/lib/metadata/holoHolo";
export const metadata = holoHoloMetadata;

const Homepage: FC = () => {
	return (
		<div className="fade-in">
			<div style={{ height: "130px" }}></div>

			<Header title="湯島ホロホロシーシャ 上野・御徒町店" page="softDrinks-okachimachi" pageName="okachimachi" />

			<div className={`${styles.container} container`}>
				<div className="row g-4">
					<div id="soft-drinks" className="col-md-12 d-flex pb-3">
						<div className={`${styles.drinkCard} w-100 pt-3`}>
							<div>
								<div className="row">
									<div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
										<div className={styles.customImageContainer}>
											<div className={styles.greenBorderStack}></div>
											<div className={styles.stackedContainer}>
												<Image src="/img/okachimachi/softdrinks.jpg" alt="Color Drink" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
											</div>
										</div>
									</div>
									<div className={`col-12 col-md-6 d-flex text-center justify-content-center align-items-center`}>
										<div>
											<div className="row">
												<div className="col-12">
													<div className={styles.sectionTitle}>Soft Drinks</div>
													<ul className={`${styles.sectionText} list-unstyled mb-0`}>
														<li>
															<strong>コーラ</strong>
														</li>
														<li>
															<strong>ジンジャーエール</strong>
														</li>

														<li>
															<strong>炭酸水</strong>
														</li>
														<li>
															<strong>トニックウォーター</strong>
														</li>
														<li>
															<strong>アップルジュース</strong>
														</li>
														<li>
															<strong>オレンジジュース</strong>
														</li>
														<li>
															<strong>グレープフルーツジュース</strong>
														</li>
														<li>
															<strong>カルピス</strong>
														</li>
													</ul>
												</div>
											</div>

											<div className={styles.price}>¥500</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="border-bottom container mt-4"></div>
			<div id="tea-coffee" className={`${styles.container} container mt-4`}>
				<div className="col-md-12 d-flex pb-3">
					<div className={`${styles.drinkCard} w-100 pt-3`}>
						<div>
							<div className="row">
								<div className="col-12 col-md-6 d-flex   justify-content-center justify-content-md-end align-items-center">
									<div>
										{" "}
										<div className={`${styles.sectionTitle}  justify-content-center justify-content-md-end`}>Tea/Coffee</div>
										<div className={styles.sectionText}>
											<p className="text-center text-md-end">
												烏龍茶
												<br />
												ルイボス茶
												<br />
												ジャスミン茶
												<br />
												アールグレイ
												<br />
												ダージリン
												<br />
												セイロン
												<br />
												コーヒー (¥600)
												<br />
												カフェラテ (¥600)
											</p>
											<div className={`${styles.price} text-center text-md-end mb-4`}>¥1,000</div>
										</div>
									</div>
								</div>

								<div className={`col-12 col-md-6 d-flex  justify-content-center  align-items-centerr`}>
									<div className={styles.customImageContainer}>
										<div className={styles.greenBorderStack}></div>
										<div className={styles.stackedContainer}>
											<Image src="/img/jinbocho/drinksimg.jpg" alt="Fruit Tea" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
										</div>
									</div>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border-bottom container mt-4"></div>

			<div id="chai-cocoa" className="container mt-4 mb-5">
				<div className="row g-4">
					{/* Chai */}
					<div className="col-md-4 d-flex">
						<div className={`${styles.drinkCard2} pt-3 w-100 d-flex align-items-center`}>
							<div className={`${styles.verticalText} ${styles.sectionTitle}`}>チャイ</div>
							<div className={styles.customImageContainerSmall}>
								<div className={styles.greenBorderStackSmall}></div>
								<div className={styles.stackedContainer}>
									<Image src="/img/jinbocho/drinksimg3.jpg" alt="Chai" width={250} height={250} className={`${styles.drinkImage2} ${styles.imageHover}`} />
								</div>
							</div>{" "}
						</div>
					</div>

					{/* Matcha Milk */}
					<div className="col-md-4 d-flex">
						<div className={`${styles.drinkCard2} pt-3 w-100 d-flex align-items-center`}>
							<div className={`${styles.verticalText} ${styles.sectionTitle}`}>ココア</div>
							<div className={styles.customImageContainerSmall}>
								<div className={styles.greenBorderStackSmall}></div>
								<div className={styles.stackedContainer}>
									<Image src="/img/jinbocho/drinksimg4.jpg" alt="Matcha Milk" width={250} height={250} className={`${styles.drinkImage2} ${styles.imageHover}`} />
								</div>
							</div>{" "}
						</div>
					</div>

					{/* Hot or Cold */}
					<div className="col-md-4 d-flex mb-3">
						<div className={`${styles.drinkCard} pt-3 w-100 text-center d-flex flex-column justify-content-center`}>
							<h3 className={styles.sectionSubtitle}>Hot or Cold</h3>
							<p className={`${styles.sectionText} text-center mb-1`}>ホット / アイス お選びください。</p>
							<div className={`${styles.price} text-center`}>¥600</div>
						</div>
					</div>
				</div>
			</div>

			<Footer page="jinbocho" />
		</div>
	);
};

export default Homepage;
