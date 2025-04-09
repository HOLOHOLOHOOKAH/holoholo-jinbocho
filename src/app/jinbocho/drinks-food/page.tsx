"use client";

import Image from "next/image";
import styles from "./drinksFood.module.css";
import { FC } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Link from "next/dist/client/link";

const Homepage: FC = () => {
	return (
		<div className="fade-in">
			<div style={{ height: "130px" }}></div>

			<Header page="drinksFood-jinbocho" pageName="jinbocho" />

			<div id="liqueur-beer" className={`${styles.container} container`}>
				<div className="row g-4">
					<div className="col-md-12 d-flex pb-3">
						<div className={`${styles.drinkCard} w-100 pt-3`}>
							<div>
								<div className="row">
									<div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
										<div className={styles.customImageContainer}>
											<div className={styles.greenBorderStack}></div>
											<div className={styles.stackedContainer}>
												<Image src="/img/drinks.jpeg" alt="Color Drink" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
											</div>
										</div>
									</div>
									<div className={`${styles.borderLeft} col-12 col-md-6 d-flex text-center justify-content-center align-items-center`}>
										<div>
											<div className="row">
												<div className="col-12">
													<div className={styles.sectionTitle}>Liqueur</div>
													<ul className={`${styles.sectionText} list-unstyled mb-0`} style={{ columns: 2 }}>
														<li>
															<strong>ジン</strong>
														</li>
														<li>
															<strong>ウォッカ</strong>
														</li>
														<li>
															<strong>ピーチ</strong>
														</li>
														<li>
															<strong>マリブ</strong>
														</li>
														<li>
															<strong>グリーンバナナ</strong>
														</li>
														<li>
															<strong>カルーア</strong>
														</li>
														<li>
															<strong>アマレット</strong>
														</li>
														<li>
															<strong>ティフィン</strong>
														</li>
														<li>
															<strong>焼酎（甲類）</strong>
														</li>
													</ul>
												</div>
											</div>
											<p style={{ maxWidth: "400px", color: "#c1c1c1" }} className={`${styles.sectionText} mt-4 text-center`}>
												※ソフトドリンクからお好きな割り材をお選びください。
											</p>
											<div className={styles.sectionTitle}>Beer</div>
											<p className={`${styles.sectionText} mt-4 text-start`}>
												<strong>ハイネケン </strong> <span style={{ color: "grey" }}>..............</span> ¥800〜
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="border-bottom container mt-4"></div>
			<div id="snacks" className={`${styles.container} container mt-4`}>
				<div className="col-md-12 d-flex pb-3">
					<div className={`${styles.drinkCard} w-100 pt-3`}>
						<div>
							<div className="row">
								<div className="col-12 col-md-6 d-flex   justify-content-center justify-content-md-end align-items-center">
									<div>
										{" "}
										<div className={`${styles.sectionTitle}  justify-content-center justify-content-md-end`}>Snacks</div>
										<div className={styles.sectionText}>
											<div className="text-center text-md-end mb-5">
												<p>
													ポップコーン <span style={{ color: "grey" }}>.....................</span> ¥500
												</p>
												<p>
													チョコレート <span style={{ color: "grey" }}>......................</span> ¥300
												</p>
												<p>
													マシュマロ＆ビスケット <span style={{ color: "grey" }}>........</span> ¥300
												</p>
												<p>
													燻製ミックスナッツ <span style={{ color: "grey" }}>.............</span> ¥500
												</p>
											</div>
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

			<Footer />
		</div>
	);
};

export default Homepage;
