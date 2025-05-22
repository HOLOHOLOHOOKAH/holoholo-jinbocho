// components/ShopCards.tsx
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

const shops = [
	{
		title: "湯島ホロホロシーシャ 上野",
		subtitle: "御徒町店",
		img: "/img/okachimachi/holoholo.jpg",
		url: "/okachimachi",
		buttonClass: styles.btnShop1,
		location: {
			address: "〒110-0005 東京都台東区上野１丁目５−３ 市川ビル 2F",
			mapUrl: "https://maps.google.com/?q=湯島ホロホロシーシャ+上野御徒町店",
		},
		social: {
			instagram: "https://www.instagram.com/holoholohookah/",
			twitter: "https://x.com/HoloHoloHookah",
		},
	},
	{
		title: "神保町ホロホロシーシャ",
		subtitle: "神保町",
		img: "/img/jinbocho/bg12.png",
		url: "/jinbocho",
		buttonClass: styles.btnShop2,
		location: {
			address: "〒101-0051  東京都千代田区神田神保町1丁目19-6 KTビル 5階 ",
			mapUrl: "https://maps.google.com/?q=神保町ホロホロシーシャ",
		},
		social: {
			instagram: "https://www.instagram.com/holoholojinbocho/",
			twitter: "https://x.com/holojinbocho",
		},
	},
	{
		title: "上野・御徒町 シーシャバー",
		subtitle: "Asile Smoke",
		img: "/img/asile.jpg",
		url: "https://www.asilesmokes.com/",
		buttonClass: styles.btnShop3,
		external: true,
		location: {
			address: "〒113-0034  東京都文京区湯島３丁目３８−１５ シャローム湯島 地下1階",
			mapUrl: "https://maps.google.com/?q=Asile+Smoke+上野御徒町",
		},
		social: {
			instagram: "https://www.instagram.com/asile_smoke/",
			twitter: "https://x.com/asile_smoke",
		},
	},
];

const Homepage = () => {
	return (
		<main className={styles.mainContainer}>
			<section className={styles.heroSection}>
				<video autoPlay muted loop playsInline className={styles.videoBackground}>
					<source src="/img/smoke.mp4" type="video/mp4" />
				</video>
				<div className={styles.heroOverlay}></div>
				<div className="container">
					<div className={styles.heroContent}>
						<h1 className={styles.heroTitle}>シーシャ体験</h1>
						<p className={styles.heroSubtitle}>東京の上質な空間で、特別なひとときを</p>
						<a href="#locations" className={styles.heroButton}>
							店舗を見る
						</a>
					</div>
				</div>
				<div className={styles.scrollIndicator}>
					<div className={styles.scrollArrow}></div>
					<div className={styles.scrollArrow}></div>
					<div className={styles.scrollArrow}></div>
				</div>
			</section>

			<section className={styles.locationsSection}>
				<div id="locations" className="container">
					<h1 className={styles.sectionTitle}>店舗案内</h1>
					<div className={`row g-4 justify-content-center ${styles.cardWrapper}`}>
						{shops.map((shop, index) => (
							<div className="col-md-4" key={index}>
								<div className={`${styles.shopCard}`}>
									<div className={styles.imageWrapper}>
										<Image height={400} width={600} src={shop.img} alt={shop.title} className={styles.cardImage} />
										<div className={styles.overlay}></div>
									</div>
									<div className={styles.cardContent}>
										<div className={styles.cardMainContent}>
											<h2 className={styles.cardTitle}>{shop.title}</h2>
											<p className={styles.cardSubtitle}>{shop.subtitle}</p>

											<div className={styles.locationInfo}>
												<a href={shop.location.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.address}>
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.icon}>
														<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
													</svg>
													{shop.location.address}
												</a>
											</div>
										</div>

										<div className={styles.cardActions}>
											<div className={styles.socialLinks}>
												<a href={shop.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.icon}>
														<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
													</svg>
												</a>
												<a href={shop.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.icon}>
														<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
													</svg>
												</a>
											</div>

											{shop.external ? (
												<a href={shop.url} className={`${styles.cardButton} ${shop.buttonClass}`} target="_blank" rel="noopener noreferrer">
													詳しく見る →
												</a>
											) : (
												<a href={shop.url} className={`${styles.cardButton} ${shop.buttonClass}`}>
													詳しく見る →
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<footer className={styles.footer}>
				<p>© 2025 HoloHolo Shisha. All rights reserved.</p>
			</footer>
		</main>
	);
};

export default Homepage;
