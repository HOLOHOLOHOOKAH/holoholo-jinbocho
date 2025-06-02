import React from "react";
import styles from "./system.module.css";
import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

type Title = "神保町ホロホロシーシャ" | "湯島ホロホロシーシャ 上野・御徒町店";

export type SystemConfig = {
	shisha: {
		image: {
			src: string;
			alt: string;
			width: number;
			height: number;
		};
		items: Array<{
			label: string;
			price: string;
		}>;
		note: string;
	};
	options: {
		image: {
			src: string;
			alt: string;
			width: number;
			height: number;
		};
		items: Array<{
			label: string;
			price: string;
		}>;
	};
	wifi: {
		ssid: string;
		password: string;
	};
	notes: string[];
};

interface SystemPageProps {
	config: SystemConfig;
	page: "jinbocho" | "okachimachi";
	title: Title;
}

const SystemPage: React.FC<SystemPageProps> = ({ config, page, title }) => {
	return (
		<div className={styles.pageContainer}>
			<Header title={title} page="homepage" pageName={page} />
			<div style={{ height: "140px" }}></div>

			<div className={styles.menuContainer}>
				{/* Shisha Menu Section */}
				<div className={`${styles.menuSection} ${styles.shisha}`}>
					<div className={styles.menuContent}>
						<div className={styles.customImageContainer}>
							<div className={styles.greenBorderStack}></div>
							<div className={styles.stackedContainer}>
								<Image src={config.shisha.image.src} alt={config.shisha.image.alt} width={config.shisha.image.width} height={config.shisha.image.height} className={styles.drinkImage} />
							</div>
						</div>
						<div className={styles.menuItems}>
							<h2 className={styles.sectionTitle}>Shisha</h2>

							{config.shisha.items.map((item, index) => (
								<div key={index} className={styles.menuItem}>
									<span className={styles.itemLabel}>{item.label}</span>
									<span className={styles.itemPrice}>{item.price}</span>
								</div>
							))}
							<div className={styles.menuNote}>{config.shisha.note}</div>
						</div>
					</div>
				</div>
				<div className="section-divider my-4"></div>

				{/* Options Menu Section */}
				<div className={`${styles.menuSection} ${styles.options}`}>
					<div className={`${styles.menuContent} ${styles.reverse}`}>
						<div className={styles.customImageContainer}>
							<div className={styles.greenBorderStack}></div>
							<div className={styles.stackedContainer}>
								<Image src={config.options.image.src} alt={config.options.image.alt} width={config.options.image.width} height={config.options.image.height} className={styles.drinkImage} />
							</div>
						</div>
						<div className={styles.menuItems}>
							<h2 className={styles.sectionTitle}>Options</h2>

							{config.options.items.map((item, index) => (
								<div key={index} className={styles.menuItem}>
									<span className={styles.itemLabel}>{item.label}</span>
									<span className={styles.itemPrice}>{item.price}</span>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="section-divider my-4"></div>

				{/* Info and WiFi Section */}
				<div className={`${styles.menuSection} ${styles.info}`}>
					<div className={styles.infoSection}>
						<div>
							<h2 className={styles.sectionTitle}>Notes</h2>
							<div className={styles.notesList}>
								{config.notes.map((note, index) => (
									<div key={index} className={styles.noteItem}>
										{note}
									</div>
								))}
							</div>
						</div>

						<div>
							<h2 className={styles.sectionTitle}>Wi-Fi</h2>
							<div className={styles.wifiInfo}>
								<div className={styles.wifiItem}>
									<span className={styles.wifiLabel}>ネットワーク</span>
									<span className={styles.wifiValue}>{config.wifi.ssid}</span>
								</div>
								<div className={styles.wifiItem}>
									<span className={styles.wifiLabel}>パスワード</span>
									<span className={styles.wifiValue}>{config.wifi.password}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer page={page} />
		</div>
	);
};

export default SystemPage;
