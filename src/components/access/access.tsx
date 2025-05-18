import React from "react";
import styles from "./access.module.css";

type PageName = "jinbocho" | "okachimachi";

interface AccessProps {
	page: PageName;
}

const Access: React.FC<AccessProps> = ({ page }) => {
	const storeInfo = {
		jinbocho: {
			name: "神保町ホロホロシーシャ",
			address: "〒101-0051  東京都千代田区神田神保町1丁目19-6 KTビル 5階",
			access: "神保町徒歩2分、新御茶ノ水、お茶の水から徒歩5分",
			phone: "080-6118-4092",
			hours: "月〜日13:00-24:00",
		},
		okachimachi: {
			name: "湯島ホロホロシーシャ 上野・御徒町店",
			address: "〒113-0034  東京都文京区湯島３丁目３８−１５ シャローム湯島 地下1階",
			access: "上野.秋葉原.御徒町.湯島からアクセス可能湯島駅6番出口より徒歩1分",
			phone: "070-2644-8150",
			hours: "月〜日13:00-29:00",
		},
	};

	const currentStore = storeInfo[page];
	const mapLink = page === "okachimachi" ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8512064571223!2d139.77005!3d35.705279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1f7739a0ad%3A0xa81355e0c1a6287!2z5rmv5bO244Ob44Ot44Ob44Ot44K344O844K344OjIOS4iumHjuKAouW-oeW-kueUuuW6lw!5e0!3m2!1sen!2sjp!4v1744257796202!5m2!1sen!2sjp" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12163.615315895542!2d139.74777788355766!3d35.6962041609454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188de87da1e3af%3A0xc487f232ab6fd3ac!2z56We5L-d55S644Ob44Ot44Ob44Ot44K344O844K344Oj!5e0!3m2!1sen!2sjp!4v1743944397277!5m2!1sen!2sjp";

	const infoItems = [
		{ icon: "shop", label: "店名", value: currentStore.name },
		{ icon: "geo-alt-fill", label: "住所", value: currentStore.address },
		{ icon: "signpost-2", label: "アクセス", value: currentStore.access },
		{
			icon: "telephone-fill",
			label: "電話番号",
			value: currentStore.phone,
			isPhone: true,
		},
		{ icon: "clock-fill", label: "営業時間", value: currentStore.hours },
	];

	return (
		<div id="information" className={`px-3 pt-5 ${styles.overlay}`}>
			<div className="row g-4 align-items-stretch">
				{/* Info Box */}
				<div className="col-md-4 order-lg-2">
					<div className={`${styles.infoBox} shadow`}>
						<h3 className={styles.title}>インフォメーション</h3>
						{infoItems.map(({ icon, label, value, isPhone }) => (
							<div className={styles.infoItem} key={label}>
								<span className={styles.label}>
									<i className={`bi bi-${icon} me-2`} />
									{label}
								</span>
								<span className={styles.value}>
									{isPhone ? (
										<a href={`tel:${value.replace(/[^0-9+]/g, "")}`} className={styles.phoneLink}>
											{value}
										</a>
									) : (
										value
									)}
								</span>
							</div>
						))}
					</div>
				</div>
				{/* Map */}
				<div className="col-md-8 order-lg-1">
					<div className={styles.mapContainer}>
						<iframe title="access" className={styles.map} src={mapLink} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Access;
