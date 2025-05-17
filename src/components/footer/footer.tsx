import React from "react";
import "./footer.css";
import Link from "next/link";

type PageName = "jinbocho" | "okachimachi";

interface HeaderProps {
	page: PageName;
}

const Footer: React.FC<HeaderProps> = ({ page }) => {
	let shopName = "";
	let address = "";
	let instagramUrl = "";
	let xUrl = "";

	if (page === "jinbocho") {
		shopName = "神保町ホロホロシーシャ";
		address = "〒101-0051  東京都千代田区神田神保町1丁目19-6 KTビル 5階";
		instagramUrl = "https://www.instagram.com/holoholojinbocho/";
		xUrl = "https://x.com/holojinbocho";
	} else if (page === "okachimachi") {
		shopName = "湯島ホロホロシーシャ 上野・御徒町店";
		address = "〒113-0034  東京都文京区湯島３丁目３８−１５ シャローム湯島 地下1階";
		instagramUrl = "https://www.instagram.com/holoholohookah/";
		xUrl = "https://x.com/HoloHoloHookah";
	}
	return (
		<footer className="footer custom-footer">
			<div className="footer-wrapper">
				<h2 className="footer-title">{shopName}</h2>
				<p className="footer-address">{address}</p>
			</div>

			<div className="social-links d-flex justify-content-center mt-3">
				<Link aria-label="Open Instagram page" className="m-0 mx-2 icon" rel="noreferrer" target="_blank" href={instagramUrl}>
					<i className="bi bi-instagram" />
				</Link>
				<Link aria-label="Open X page" className="m-0 mx-2 icon" rel="noreferrer" target="_blank" href={xUrl}>
					<i className="bi bi-twitter-x" />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
