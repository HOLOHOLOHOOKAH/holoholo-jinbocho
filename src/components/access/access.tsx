import React from "react";
import styles from "./access.module.css";

type PageName = "jinbocho" | "okachimachi";

interface AccessProps {
	page: PageName;
}

const Access: React.FC<AccessProps> = ({ page }) => {
	const schedule = [
		{ day: "店名", hours: page === "jinbocho" ? "神保町ホロホロシーシャ" : "湯島ホロホロシーシャ 上野・御徒町店" },
		{ day: "住所", hours: page === "jinbocho" ? "〒101-0051  東京都千代田区神田神保町1丁目19-6 KTビル 5階" : "〒113-0034  東京都文京区湯島３丁目３８−１５ シャローム湯島 地下1階" },
		{ day: "アクセス", hours: page === "jinbocho" ? "神保町徒歩2分、新御茶ノ水、お茶の水から徒歩5分" : "上野.秋葉原.御徒町.湯島からアクセス可能湯島駅6番出口より徒歩1分" },
		{ day: "電話番号", hours: page === "jinbocho" ? "080-6118-4092" : "070-2644-8150" },
		{ day: "営業時間", hours: page === "jinbocho" ? "月〜日13:00-24:00" : "月〜日13:00-29:00" },
	];

	const link = page === "okachimachi" ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8512064571223!2d139.77005!3d35.705279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1f7739a0ad%3A0xa81355e0c1a6287!2z5rmv5bO244Ob44Ot44Ob44Ot44K344O844K344OjIOS4iumHjuKAouW-oeW-kueUuuW6lw!5e0!3m2!1sen!2sjp!4v1744257796202!5m2!1sen!2sjp" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12163.615315895542!2d139.74777788355766!3d35.6962041609454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188de87da1e3af%3A0xc487f232ab6fd3ac!2z56We5L-d55S644Ob44Ot44Ob44Ot44K344O844K344Oj!5e0!3m2!1sen!2sjp!4v1743944397277!5m2!1sen!2sjp";

	return (
		<div id="information" className={`px-3 pt-5 ${styles.overlay}`}>
			<div className="row g-4 align-items-stretch">
				{/* Info Box */}
				<div className="col-md-4 order-lg-2">
					<div className={`${styles.hoursBox} shadow`}>
						<h3 style={{ color: "#edc806" }} className="fw-bold text-center text-uppercase mb-5 title">
							インフォメーション
						</h3>
						{schedule.map(({ day, hours }) => (
							<div className={styles.day} key={day}>
								<span>
									{day === "店名" && <i className="bi bi-shop-window me-2" />}
									{day === "電話番号" && <i className="bi bi-telephone me-2" />}
									{day === "営業時間" && <i className="bi bi-clock me-2" />}
									{day === "住所" && <i className="bi bi-geo-alt me-2" />}
									{day === "アクセス" && <i className="bi bi-map me-2" />}
									{day}
								</span>
								<span style={{ maxWidth: "250px" }} className="text-end">
									{day === "電話番号" ? <a href={`tel:${hours.replace(/[^0-9+]/g, "")}`}>{hours}</a> : hours}
								</span>
							</div>
						))}
					</div>
				</div>
				{/* Map */}
				<div className="col-md-8 order-lg-1">
					<div className="shadow rounded overflow-hidden h-100">
						<iframe title="access" className={styles.map} src={link} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Access;
