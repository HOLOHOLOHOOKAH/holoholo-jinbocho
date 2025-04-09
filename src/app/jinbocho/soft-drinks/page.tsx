"use client";

import Image from "next/image";
import styles from "./softDrinks.module.css";
import { FC } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Link from "next/dist/client/link";

const Homepage: FC = () => {
	return (
		<div className="fade-in">
			<div style={{ height: "130px" }}></div>

			<Header page="softDrinks-jinbocho" pageName="jinbocho" />

			<div className={`${styles.container} container`}>
				<div className="row g-4">
					<div id="color-drinks" className="col-md-12 d-flex pb-3">
						<div className={`${styles.drinkCard} w-100 pt-3`}>
							<div>
								<div className="row">
									<div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
										<div className={styles.customImageContainer}>
											<div className={styles.greenBorderStack}></div>
											<div className={styles.stackedContainer}>
												<Image src="/img/drinksimg2.jpg" alt="Color Drink" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
											</div>
										</div>
									</div>
									<div className={`${styles.borderLeft} col-12 col-md-6 d-flex text-center justify-content-center align-items-center`}>
										<div>
											<div className="row">
												<div className="col-12">
													<div className={styles.sectionTitle}>推しカラードリンク</div>
													<ul className={`${styles.sectionText} list-unstyled mb-0`}>
														<li>
															<strong>Red:</strong> カシス
														</li>
														<li>
															<strong>Blue:</strong> ブルー
														</li>
														<li>
															<strong>Orange:</strong> マンゴー
														</li>
														<li>
															<strong>Yellow:</strong> パッション ✕
														</li>
													</ul>
												</div>
												<div className="col-12">
													<ul className={`${styles.sectionText} list-unstyled mb-0`}>
														<li>
															<strong>White:</strong> カルピス
														</li>
														<li>
															<strong>Green:</strong> グリーンアップル
														</li>
														<li>
															<strong>Purple:</strong> バタフライピー
														</li>
														<li>
															<strong>Pink:</strong> ピーチ
														</li>
													</ul>
												</div>
											</div>
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
			</div>

			<div className="border-bottom container mt-4"></div>
			<div id="fruit-tea" className={`${styles.container} container mt-4`}>
				<div className="col-md-12 d-flex pb-3">
					<div className={`${styles.drinkCard} w-100 pt-3`}>
						<div>
							<div className="row">
								<div className="col-12 col-md-6 d-flex   justify-content-center justify-content-md-end align-items-center">
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

								<div className={`${styles.borderLeft} col-12 col-md-6 d-flex  justify-content-center  align-items-centerr`}>
									<div className={styles.customImageContainer}>
										<div className={styles.greenBorderStack}></div>
										<div className={styles.stackedContainer}>
											<Image src="/img/drinksimg.jpg" alt="Fruit Tea" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
										</div>
									</div>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border-bottom container mt-4"></div>

			<div id="chai-matcha" className="container mt-4">
				<div className="row g-4">
					{/* Chai */}
					<div className="col-md-4 d-flex">
						<div className={`${styles.drinkCard2} pt-3 w-100 d-flex align-items-center`}>
							<div className={`${styles.verticalText} ${styles.sectionTitle}`}>チャイ</div>
							<div className={styles.customImageContainerSmall}>
								<div className={styles.greenBorderStackSmall}></div>
								<div className={styles.stackedContainer}>
									<Image src="/img/drinksimg3.jpg" alt="Chai" width={250} height={250} className={`${styles.drinkImage2} ${styles.imageHover}`} />
								</div>
							</div>{" "}
						</div>
					</div>

					{/* Matcha Milk */}
					<div className="col-md-4 d-flex">
						<div className={`${styles.drinkCard2} pt-3 w-100 d-flex align-items-center`}>
							<div className={`${styles.verticalText} ${styles.sectionTitle}`}>抹茶ミルク</div>
							<div className={styles.customImageContainerSmall}>
								<div className={styles.greenBorderStackSmall}></div>
								<div className={styles.stackedContainer}>
									<Image src="/img/drinksimg4.jpg" alt="Matcha Milk" width={250} height={250} className={`${styles.drinkImage2} ${styles.imageHover}`} />
								</div>
							</div>{" "}
						</div>
					</div>

					{/* Hot or Cold */}
					<div className="col-md-4 d-flex mb-3">
						<div className={`${styles.drinkCard} pt-3 w-100 text-center d-flex flex-column justify-content-center`}>
							<h3 className={styles.sectionSubtitle}>Hot or Cold</h3>
							<p className={`${styles.sectionText} mb-1`}>ミルクで割るクリーミーな味わい</p>
							<p className={`${styles.sectionText} text-center`}>洋も和も美味い</p>
							<div className={`${styles.price} text-center`}>¥600</div>
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
			<Footer />
		</div>
	);
};

export default Homepage;
