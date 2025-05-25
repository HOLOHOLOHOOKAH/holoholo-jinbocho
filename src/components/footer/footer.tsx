"use client";

import React from "react";
import Link from "next/link";
import "./footer.css";

type PageName = "jinbocho" | "okachimachi";

interface FooterProps {
	page: PageName;
}

const shopData = {
	jinbocho: {
		name: "神保町ホロホロシーシャ",
		address: "〒101-0051 東京都千代田区神田神保町1丁目19-6 KTビル 5階",
		instagram: "https://www.instagram.com/holoholojinbocho/",
		x: "https://x.com/holojinbocho",
	},
	okachimachi: {
		name: "湯島ホロホロシーシャ 上野・御徒町店",
		address: "〒110-0005 東京都台東区上野１丁目５−３ 市川ビル 2F",
		instagram: "https://www.instagram.com/holoholohookah/",
		x: "https://x.com/HoloHoloHookah",
	},
};

const Footer: React.FC<FooterProps> = ({ page }) => {
	const { name, address, instagram, x } = shopData[page];

	return (
		<footer className="glass-footer">
			<div className="glass-footer__content">
				<div className="glass-footer__brand">
					<h3>{name}</h3>
					<p>{address}</p>
				</div>
				<div className="glass-footer__social">
					<Link href={instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
						<i className="bi bi-instagram" />
					</Link>
					<Link href={x} aria-label="X" target="_blank" rel="noreferrer">
						<i className="bi bi-twitter-x" />
					</Link>
				</div>
			</div>
			<div className="glass-footer__bottom">
				<small>&copy; {new Date().getFullYear()} HoloHolo — All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
