import Image from "next/image";
import { FC } from "react";
import styles from "./softDrinks.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { jinbochoMetadata } from "@/lib/metadata/jinbocho";
export const metadata = jinbochoMetadata;

const Homepage: FC = () => {
	return (
		<div className="fade-in">
			<Header title="神保町ホロホロシーシャ" page="homepage" pageName="jinbocho" />
			<div style={{ height: "120px" }}></div>

			{/* Color Drinks Section */}
			<div className={`${styles.container} container`}>
				<div className="d-flex justify-content-center">
					<div className={`${styles.drinkCard} w-100`}>
						<div className="d-block d-lg-flex justify-content-center align-items-center gap-5">
							<div className="col-lg-6 mb-5 mb-lg-0">
								<div className={styles.customImageContainer}>
									<div className={styles.greenBorderStack}></div>
									<div className={styles.stackedContainer}>
										<Image src="/img/jinbocho/drinksimg2.jpg" alt="Color Drink" width={400} height={400} className={styles.drinkImage} />
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<h2 className={styles.sectionTitle}>推しカラードリンク</h2>
								<ul className={styles.menuList}>
									<li className={styles.menuItem}>
										<span className={styles.menuLabel}>Red</span>
										<span className={styles.menuPrice}>カシス</span>
									</li>
									<li className={styles.menuItem}>
										<span className={styles.menuLabel}>Blue</span>
										<span className={styles.menuPrice}>ブルー</span>
									</li>
									<li className={styles.menuItem}>
										<span className={styles.menuLabel}>Orange</span>
										<span className={styles.menuPrice}>マンゴー</span>
									</li>
									<li className={styles.menuItem}>
										<span className={styles.menuLabel}>Yellow</span>
										<span className={styles.menuPrice}>パッション ✕</span>
									</li>
									<li className={styles.menuItem}>
										<span className={styles.menuLabel}>White</span>
										<span className={styles.menuPrice}>カルピス</span>
									</li>
									<li className={styles.menuItem}>
										<span className={styles.menuLabel}>Green</span>
										<span className={styles.menuPrice}>グリーンアップル</span>
									</li>
									<li className={styles.menuItem}>
										<span className={styles.menuLabel}>Purple</span>
										<span className={styles.menuPrice}>バタフライピー</span>
									</li>
									<li className={styles.menuItem}>
										<span className={styles.menuLabel}>Pink</span>
										<span className={styles.menuPrice}>ピーチ</span>
									</li>
								</ul>
								<p className={styles.sectionText}>Base: Soda / Milk / Tonic</p>
								<div className={styles.price}>¥700</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-divider mt-5"></div>

			{/* Fruit Tea Section */}
			<div className={`${styles.container} container mt-5`}>
				<div className="d-flex justify-content-center">
					<div className={`${styles.drinkCard} w-100`}>
						<div className="d-block d-lg-flex justify-content-center align-items-center gap-5">
							<div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
								<div className={styles.customImageContainer}>
									<div className={styles.greenBorderStack}></div>
									<div className={styles.stackedContainer}>
										<Image src="/img/jinbocho/drinksimg.jpg" alt="Fruit Tea" width={400} height={400} className={styles.drinkImage} />
									</div>
								</div>
							</div>
							<div className="col-lg-6 order-lg-1">
								<h2 className={styles.sectionTitle}>フルーツティー</h2>
								<h3 className={styles.sectionSubtitle}>ルイボス or ダージリン</h3>
								<p className={`${styles.sectionText} ${styles.large}`}>
									冷凍フルーツを氷替わりに
									<br />
									溶けても薄くならない
									<br />
									フルーツティーの完成です
								</p>
								<div className={styles.price}>¥1,000</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-divider mt-5"></div>

			{/* Chai Matcha Section */}
			<div className={`${styles.container} container mt-5`}>
				<div className="d-flex justify-content-center">
					<div className={`${styles.drinkCard} w-100`}>
						<div className="d-block d-lg-flex justify-content-center align-items-center gap-5">
							<div className="col-lg-6 mb-5 mb-lg-0">
								<div className={styles.customImageContainer}>
									<div className={styles.greenBorderStack}></div>
									<div className={styles.stackedContainer}>
										<Image src="/img/jinbocho/drinksimg3.jpg" alt="Chai Matcha" width={400} height={400} className={styles.drinkImage} />
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<h2 className={styles.sectionTitle}>チャイ - 抹茶ミルク</h2>
								<h3 className={styles.sectionSubtitle}>Hot or Cold</h3>
								<p className={`${styles.sectionText} ${styles.large}`}>
									ミルクで割るクリーミーな味わい
									<br />
									洋も和も美味い
								</p>
								<div className={styles.price}>¥600</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-divider mt-5"></div>

			{/* Other Drinks Section */}
			<div className={`${styles.container} container mt-5 mb-5`}>
				<div className="d-flex justify-content-center">
					<div className={`${styles.drinkCard} w-100`} style={{ maxWidth: "600px" }}>
						<h2 className={styles.sectionTitle}>Other Drinks</h2>
						<ul className={`${styles.menuList} text-center`}>
							<li className={styles.menuItem} style={{ justifyContent: "center" }}>
								烏龍茶
							</li>
							<li className={styles.menuItem} style={{ justifyContent: "center" }}>
								オレンジジュース
							</li>
							<li className={styles.menuItem} style={{ justifyContent: "center" }}>
								コーラ
							</li>
							<li className={styles.menuItem} style={{ justifyContent: "center" }}>
								ジンジャーエール
							</li>
							<li className={styles.menuItem} style={{ justifyContent: "center" }}>
								コーヒー
							</li>
							<li className={styles.menuItem} style={{ justifyContent: "center" }}>
								カフェオレ
							</li>
						</ul>
						<div className={styles.price}>¥500</div>
					</div>
				</div>
			</div>

			<Footer page="jinbocho" />
		</div>
	);
};

export default Homepage;
