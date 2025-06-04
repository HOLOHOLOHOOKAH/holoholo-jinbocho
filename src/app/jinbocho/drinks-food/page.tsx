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
		alt: "Liqueur Selection",
		width: 400,
		height: 400,
	},
	snacks: [
		{ name: "ポップコーン", price: "¥500" },
		{ name: "チョコレート", price: "¥300" },
		{ name: "マシュマロ＆ビスケット", price: "¥300" },
		{ name: "燻製ミックスナッツ", price: "¥500" },
	],
	snackImage: {
		src: "/img/jinbocho/drinksimg.jpg",
		alt: "Snacks Selection",
		width: 400,
		height: 400,
	},
};

export const metadata = jinbochoMetadata;

const Homepage: FC = () => {
	return (
		<div className={styles.pageContainer}>
			<Header title="神保町ホロホロシーシャ" page="homepage" pageName="jinbocho" />
			<div style={{ height: "140px" }}></div>

			<div className={styles.menuContainer}>
				{/* Liqueur and Beer Section */}
				<div className={styles.menuSection}>
					<div className={styles.menuContent}>
						<div className={styles.customImageContainer}>
							<div className={styles.greenBorderStack}></div>
							<div className={styles.stackedContainer}>
								<Image src={config.liqueurImage.src} alt={config.liqueurImage.alt} width={config.liqueurImage.width} height={config.liqueurImage.height} className={styles.drinkImage} />
							</div>
						</div>
						<div className={styles.menuItems}>
							<h2 className={styles.sectionTitle}>Liqueur</h2>
							<div className={styles.menuList}>
								{config.liqueurs.map((item, index) => (
									<div key={index} className={styles.menuItem}>
										<span className={styles.itemLabel}>{item}</span>
									</div>
								))}
							</div>
							<div className={styles.menuNote}>{config.liqueurNote}</div>

							<h2 className={`${styles.sectionTitle} mt-5`}>Beer</h2>
							<div className={styles.menuItem}>
								<span className={styles.itemLabel}>{config.beer.name}</span>
								<span className={styles.itemPrice}>{config.beer.price}</span>
							</div>
						</div>
					</div>
				</div>

				<div className="section-divider my-4"></div>

				{/* Snacks Section */}
				<div className={styles.menuSection}>
					<div className={`${styles.menuContent} ${styles.reverse}`}>
						<div className={styles.customImageContainer}>
							<div className={styles.greenBorderStack}></div>
							<div className={styles.stackedContainer}>
								<Image src={config.snackImage.src} alt={config.snackImage.alt} width={config.snackImage.width} height={config.snackImage.height} className={styles.drinkImage} />
							</div>
						</div>
						<div className={styles.menuItems}>
							<h2 className={styles.sectionTitle}>Snacks</h2>
							<div className={`${styles.menuList} ${styles.singleColumn}`}>
								{config.snacks.map((snack, index) => (
									<div key={index} className={styles.menuItem}>
										<span className={styles.itemLabel}>{snack.name}</span>
										<span className={styles.itemPrice}>{snack.price}</span>
									</div>
								))}
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
