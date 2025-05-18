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
			<div style={{ height: "120px" }}></div>
			<Header title="湯島ホロホロシーシャ 上野・御徒町店" page="homepage" pageName="okachimachi" />
			<div className={`${styles.container} container`}>
				<div className="d-flex justify-content-center">
					<div id="soft-drinks" className="pb-3">
						<div className={`${styles.drinkCard} w-100 pt-3`}>
							<div className="d-block d-lg-flex justify-content-center">
								<div className="mx-lg-5 px-lg-3">
									<div className={styles.customImageContainer}>
										<div className={styles.greenBorderStack}></div>
										<div className={styles.stackedContainer}>
											<Image src="/img/okachimachi/softdrinks.jpg" alt="Soft Drinks" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
										</div>
									</div>
								</div>
								<div className="mx-lg-5 px-lg-3 d-flex text-center justify-content-center align-items-center">
									<div>
										<div className={styles.sectionTitle}>Soft Drinks</div>
										<ul className={`${styles.sectionText} list-unstyled mb-0`}>
											<li>コーラ</li>
											<li>ジンジャーエール</li>
											<li>炭酸水</li>
											<li>トニックウォーター</li>
											<li>アップルジュース</li>
											<li>オレンジジュース</li>
											<li>グレープフルーツジュース</li>
											<li>カルピス</li>
										</ul>
										<div className={styles.price}>¥500</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border-bottom container mt-4 mt-lg-5"></div>
			<div id="tea-coffee" className={`${styles.container} container mt-5`}>
				<div className="pb-3">
					<div className={`${styles.drinkCard} w-100 pt-3`}>
						<div className="d-block d-lg-flex justify-content-center">
							<div className="order-lg-2 mx-lg-5 px-lg-3">
								<div className={styles.customImageContainer}>
									<div className={styles.greenBorderStack}></div>
									<div className={styles.stackedContainer}>
										<Image src="/img/jinbocho/drinksimg.jpg" alt="Tea and Coffee" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
									</div>
								</div>
							</div>
							<div className="order-lg-1 mx-lg-5 px-lg-3">
								<div>
									<div className={`${styles.sectionTitle} justify-content-center justify-content-lg-end`}>Tea/Coffee</div>
									<div className={styles.sectionText}>
										<p className="text-center text-lg-end">
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
										<div className={`${styles.price} text-center text-lg-end mb-4`}>¥1,000</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border-bottom container mt-4 mt-lg-5"></div>
			<div className={`${styles.container} container mt-5`}>
				<div className="d-flex justify-content-center">
					<div id="chai-cocoa" className="pb-3">
						<div className={`${styles.drinkCard} w-100 pt-3`}>
							<div className="d-block d-lg-flex justify-content-center">
								<div className="mx-lg-5 px-lg-3">
									<div className={styles.customImageContainer}>
										<div className={styles.greenBorderStack}></div>
										<div className={styles.stackedContainer}>
											<Image src="/img/jinbocho/drinksimg3.jpg" alt="Chai and Cocoa" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
										</div>
									</div>
								</div>
								<div className="mx-lg-5 px-lg-3 d-flex text-center justify-content-center align-items-center">
									<div>
										<div className={`${styles.sectionTitle} justify-content-center justify-content-lg-start`}>チャイ - ココア</div>
										<div className={`${styles.drinkCard} pt-3 w-100 text-start d-flex flex-column justify-content-center`}>
											<h3 className={`${styles.sectionSubtitle} text-center text-lg-start`}>Hot or Cold</h3>
											<p className={`${styles.sectionText} mb-1`}>ミルクで割るクリーミーな味わい</p>
											<p className={`${styles.sectionText}`}>洋も和も美味い</p>
											<div className={`${styles.price}`}>¥600</div>
										</div>
									</div>
								</div>
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
