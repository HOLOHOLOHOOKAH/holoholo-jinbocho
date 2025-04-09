// components/ShopCards.tsx
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
const shops = [
	{
		title: "ホロホロシーシャ",
		text: " 御徒町店",
		img: "/img/holoholo.jpg",
		url: "https://shop1.example.com",
		buttonClass: styles.btnShop1,
	},
	{
		title: "ホロホロシーシャ",
		text: "神保町店",
		img: "/img/bg12.png",
		url: "/jinbocho",
		buttonClass: styles.btnShop2,
	},
	{
		title: "アジル スモーク",
		text: "上野 御徒町",
		img: "/img/asile.jpg",
		url: "https://www.asilesmokes.com/",
		buttonClass: styles.btnShop3,
	},
];

const Homepage = () => {
	return (
		<div className="container py-5">
			<h1 className="text-center mb-5 display-4 text-white">店舗検索</h1>
			<div className={`row g-5 justify-content-center ${styles.cardWrapper}`}>
				{shops.map((shop, index) => (
					<div className="col-md-4" key={index}>
						<div className={`card h-100 ${styles.shopCard}`}>
							<Image height={300} width={400} src={shop.img} className="card-img-top" alt={shop.title} />
							<div className="card-body text-center">
								<h5 className="card-title">{shop.title}</h5>
								<p className="card-text mb-4">{shop.text}</p>
								<a href={shop.url} className={`btn mb-2 ${styles.btnCustom} ${shop.buttonClass}`} target="_self" rel="noopener noreferrer">
									もっと見る
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Homepage;
