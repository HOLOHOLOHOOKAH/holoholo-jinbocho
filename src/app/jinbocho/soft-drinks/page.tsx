import Image from "next/image";
import styles from "./softDrinks.module.css";
import { FC } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { jinbochoMetadata } from "@/lib/metadata/jinbocho";
export const metadata = jinbochoMetadata;

const Homepage: FC = () => {
	return (
		<div className="fade-in">
			<Header title="神保町ホロホロシーシャ" page="homepage" pageName="jinbocho" />
			<div style={{ height: "120px" }}></div>
			<div id="color-drinks" className={`${styles.container} container`}>
				<div className="d-flex justify-content-center">
					<div className="pb-3">
						<div className={`${styles.drinkCard} w-100 pt-3`}>
							<div className="d-block d-lg-flex justify-content-center">
								<div className="mx-lg-5 px-lg-3">
									<div className={styles.customImageContainer}>
										<div className={styles.greenBorderStack}></div>
										<div className={styles.stackedContainer}>
											<Image src="/img/jinbocho/drinksimg2.jpg" alt="Color Drink" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
										</div>
									</div>
								</div>
								<div className="mx-lg-5 px-lg-3 d-flex text-center justify-content-center align-items-center">
									<div>
										<div className={styles.sectionTitle}>推しカラードリンク</div>
										<ul className={`${styles.sectionText} list-unstyled mb-0`}>
											<li>
												<span style={{ fontSize: "16px" }}>Red</span>: カシス
											</li>
											<li>
												<span style={{ fontSize: "16px" }}>Blue:</span> ブルー
											</li>
											<li>
												<span style={{ fontSize: "16px" }}>Orange:</span> マンゴー
											</li>
											<li>
												<span style={{ fontSize: "16px" }}>Yellow:</span> パッション ✕
											</li>
										</ul>
										<ul className={`${styles.sectionText} list-unstyled mb-0`}>
											<li>
												<span style={{ fontSize: "16px" }}>White:</span> カルピス
											</li>
											<li>
												<span style={{ fontSize: "16px" }}>Green:</span> グリーンアップル
											</li>
											<li>
												<span style={{ fontSize: "16px" }}>Purple:</span> バタフライピー
											</li>
											<li>
												<span style={{ fontSize: "16px" }}>Pink:</span> ピーチ
											</li>
										</ul>

										<p className={`${styles.sectionText} mt-2`}>
											<strong>Base:</strong> Soda / Milk / Tonic
										</p>
										<div className={styles.price}>¥700</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-divider mt-4 mt-lg-5"></div>

			<div id="fruit-tea" className={`${styles.container} container mt-5`}>
				<div className="pb-3">
					<div className={`${styles.drinkCard} w-100 pt-3`}>
						<div className="d-block d-lg-flex justify-content-center">
							<div className="order-lg-2 mx-lg-5 px-lg-3">
								<div className={styles.customImageContainer}>
									<div className={styles.greenBorderStack}></div>
									<div className={styles.stackedContainer}>
										<Image src="/img/jinbocho/drinksimg.jpg" alt="Fruit Tea" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
									</div>
								</div>
							</div>
							<div className="order-lg-1 mx-lg-5 px-lg-3">
								<div>
									{" "}
									<div className={`${styles.sectionTitle}  justify-content-center justify-content-md-end`}>フルーツティー</div>
									<div className={styles.sectionText}>
										<p className="text-center text-md-end">
											<strong>ルイボス or ダージリン</strong>
										</p>
										<p className="text-center text-md-end">
											冷凍フルーツを氷替わりに
											<br />
											溶けても薄くならない
											<br />
											フルーツティーの完成です
										</p>
										<div className={`${styles.price} text-center text-md-end mb-4`}>¥1,000</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-divider mt-4 mt-lg-5"></div>
			<div className={`${styles.container} container mt-5`}>
				<div className="d-flex justify-content-center">
					<div id="chai-matcha" className="pb-3">
						<div className={`${styles.drinkCard} w-100 pt-3`}>
							<div className="d-block d-lg-flex justify-content-center">
								<div className="mx-lg-5 px-lg-3">
									<div className={styles.customImageContainer}>
										<div className={styles.greenBorderStack}></div>
										<div className={styles.stackedContainer}>
											<Image src="/img/jinbocho/drinksimg3.jpg" alt="Color Drink" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
										</div>
									</div>
								</div>
								<div className="mx-lg-5 px-lg-3 d-flex text-center justify-content-center align-items-center">
									<div>
										<div className={styles.sectionTitle}>チャイ - 抹茶ミルク</div>

										<div className={`${styles.drinkCard} pt-3 w-100 text-start d-flex flex-column justify-content-center`}>
											<h3 className={styles.sectionSubtitle}>Hot or Cold</h3>
											<p className={`${styles.sectionText} mb-1`}>ミルクで割るクリーミーな味わい</p>
											<p className={`${styles.sectionText} t`}>洋も和も美味い</p>
											<div className={`${styles.price} `}>¥600</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-divider mt-4 mt-lg-5"></div>
			<div id="other-drinks" style={{ maxWidth: "900px" }} className={`${styles.container} container mt-4 mb-4`}>
				{/* Other Drinks */}
				<div className="col-12 pt-3 mb-3">
					<div className={`${styles.drinkCard} text-center`}>
						<div className={`${styles.sectionTitle} justify-content-center`}>Other Drinks</div>
						<div className="row">
							<div className="col-md-12">
								<ul className={`${styles.sectionText}  text-center list-unstyled`}>
									<li>烏龍茶</li>
									<li>オレンジジュース</li>
									<li>コーラ</li>
									<li>ジンジャーエール</li>
									<li>コーヒー</li>
									<li>カフェオレ</li>
								</ul>
							</div>
						</div>
						<div className={`${styles.price} text-center`}>¥500</div>
					</div>
				</div>
			</div>
			<Footer page="jinbocho" />
		</div>
	);
};

export default Homepage;
