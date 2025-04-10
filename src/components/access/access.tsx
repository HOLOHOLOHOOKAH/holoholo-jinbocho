import React from "react";
import styles from "./access.module.css";

type PageName = "jinbocho" | "okachimachi";

interface AccessProps {
	page: PageName;
}

const Access: React.FC<AccessProps> = ({ page }) => {
	const schedule = [
		{ day: "月曜日", hours: page === "jinbocho" ? "13:00-24:00" : "13:00-05:00" },
		{ day: "火曜日", hours: page === "jinbocho" ? "13:00-24:00" : "13:00-05:00" },
		{ day: "水曜日", hours: page === "jinbocho" ? "13:00-24:00" : "13:00-05:00" },
		{ day: "木曜日", hours: page === "jinbocho" ? "13:00-24:00" : "13:00-05:00" },
		{ day: "金曜日", hours: page === "jinbocho" ? "13:00-24:00" : "13:00-05:00" },
		{ day: "土曜日", hours: page === "jinbocho" ? "13:00-24:00" : "13:00-05:00" },
		{ day: "日曜日", hours: page === "jinbocho" ? "13:00-24:00" : "13:00-05:00" },
	];

	const link = page === "okachimachi" ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8512064571223!2d139.77005!3d35.705279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1f7739a0ad%3A0xa81355e0c1a6287!2z5rmv5bO244Ob44Ot44Ob44Ot44K344O844K344OjIOS4iumHjuKAouW-oeW-kueUuuW6lw!5e0!3m2!1sen!2sjp!4v1744257796202!5m2!1sen!2sjp" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12163.615315895542!2d139.74777788355766!3d35.6962041609454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188de87da1e3af%3A0xc487f232ab6fd3ac!2z56We5L-d55S644Ob44Ot44Ob44Ot44K344O844K344Oj!5e0!3m2!1sen!2sjp!4v1743944397277!5m2!1sen!2sjp";

	return (
		<div id="access" className={`px-3 pt-5 ${styles.overlay}`}>
			<h1 className={`${styles.title} mb-5`}>Access</h1>
			<div className="row">
				<div className="col-md-8 mb-4">
					<iframe title="access" className={styles.map} src={link} width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<div className="col-md-4">
					<div className={`${styles.hoursBox} text-white`}>
						<h2 className="fw-bold mb-4">営業時間</h2>
						{schedule.map(({ day, hours }) => (
							<div className={styles.day} key={day}>
								<span>{day}</span>
								<span>{hours}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Access;
