import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./system.module.css";
import Image from "next/image";

const Homepage: React.FC = () => {
	return (
		<div className="px-3">
			<Header page="system-jinbocho" pageName="jinbocho" />
			<div style={{ height: "130px" }}></div>
			<h1 className="d-flex justify-content-center">システム</h1>
			<div className="border-bottom container mt-5 mb-5"></div>

			<div className={`${styles.menuContainer}  container text-white py-5 px-4`}>
				<div id="shisha" className={styles.menuSection}>
					<div className="row">
						<div className="col-12 col-md-6 d-flex justify-content-center  align-items-center">
							<div className={styles.customImageContainer}>
								<div className={styles.greenBorderStack}></div>
								<div className={styles.stackedContainer}>
									<Image src="/img/shisha.jpg" alt="Color Drink" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
								</div>
							</div>
						</div>
						<div className=" col-12 col-md-6">
							<div className="d-flex justify-content-center justify-content-md-start align-items-center h-100">
								<div>
									<div className={`${styles.sectionTitle}  justify-content-center `}>Shisha</div>
									<div className=" d-flex text-justify justify-content-center align-items-center">
										<div>
											<p>
												シーシャ <span style={{ color: "grey" }}>..................................</span> ¥1,800
											</p>
											<p>
												ドリンク <span style={{ color: "grey" }}>..................................</span> ¥500〜
											</p>
											<p>
												チャージ <span style={{ color: "grey" }}>......................................</span> ¥700
											</p>
											<p>
												シェア <span style={{ color: "grey" }}>.......................................</span> ¥1,000
											</p>
											<p className="text-center">1台につき2名様まで</p>
										</div>
									</div>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-bottom container mt-5 mb-5"></div>

				<div id="options" className={styles.menuSection}>
					<div className="row">
						<div className=" col-12 col-md-6">
							<div className="d-flex justify-content-center align-items-center h-100">
								<div>
									<div className={`${styles.sectionTitle}  justify-content-center `}>Options</div>
									<div className=" d-flex text-center justify-content-center align-items-center">
										<div>
											<p>
												トップ替え <span style={{ color: "grey" }}>..................................</span> ¥1,500
											</p>
											<p>
												アイスホース <span style={{ color: "grey" }}>..................................</span> ¥300
											</p>
											<p>
												ジュースボトル <span style={{ color: "grey" }}>......................................</span> ¥700
											</p>
											<p>
												アルコールボトル <span style={{ color: "grey" }}>.......................................</span> ¥1,000
											</p>
											<p className="text-center">1台につき2名様まで</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
							<div className={styles.customImageContainer}>
								<div className={styles.greenBorderStack}></div>
								<div className={styles.stackedContainer}>
									<Image src="/img/shishaTop.jpg" alt="Color Drink" width={300} height={300} className={`${styles.drinkImage} ${styles.imageHover}`} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-bottom container mt-5 mb-5"></div>

				<div id="wifi" className={`${styles.menuSection} small text-center`}>
					<div className={`${styles.sectionTitle}  justify-content-center `}>Wi-Fi</div>
					<p>SD: Holojinbocho_5G</p>
					<p>PW: 5EEVK33762</p>
				</div>
				<div id="notes" className={`${styles.menuSection} small text-center`}>
					<div className={`${styles.sectionTitle}  justify-content-center `}>Notes</div>
					<p>※ フードのみ持ち込み可能 ※シーシャ機材にはお手を触れないようお願い致します。</p>
					<p>※ ボトルやトップ等機材の破損の場合、実費を頂きます。</p>
					<p>※ 混雑時のみお席2時間制となります。</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
