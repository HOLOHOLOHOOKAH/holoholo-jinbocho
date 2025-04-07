import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./system.module.css";

const Homepage: React.FC = () => {
	return (
		<div style={{ backgroundImage: "url('/img/bg22.png')" }}>
			<Header page="system" />
			<div style={{ height: "130px" }}></div>
			<div style={{ maxWidth: "900px" }} className={`${styles.menuContainer}  container text-white py-5 px-4`}>
				<div className="text-center mb-4">
					<h1 className="fw-bold mb-5">システム</h1>
					<h2 className="fs-4 fw-semibold">SYSTEM 1 PERSON ¥3,000〜</h2>
					<p className="small">お一人様シーシャ1本1ドリンクご注文お願いします。</p>
				</div>

				<div className={styles.menuSection}>
					<ul className="list-unstyled small mb-3">
						<li>シーシャ: ¥1800</li>
						<li>チャージ: ¥700 (お通し付き)</li>
						<li>ドリンク: ¥500〜</li>
					</ul>
				</div>

				<div className={styles.menuSection}>
					<p className="small fw-semibold">ホロホロメンバーズカードは湯島・神保町共通</p>
				</div>

				<div className={styles.menuSection}>
					<h5 className="fw-semibold">Option</h5>
					<ul className="list-unstyled small">
						<li>アルコールボトル: ¥1000</li>
						<li>ジュースボトル: ¥500</li>
						<li>アイスホース: ¥300</li>
					</ul>
				</div>

				<div className={`${styles.menuSection} small`}>
					<p>
						シーシャのメニューはおいてません。
						<br />
						スタッフがお客様の好みをお伺いして作ります！
					</p>
					<p>フルーツ甘い系 / フルーツさっぱり系 / お菓子系 / ドリンク系 / 変わり種 / すっきりしたい / リラックスしたい etc...</p>
					<p>気になるフレーバーは香りが試せます。</p>
					<p className="fw-semibold">※混雑時3時間制</p>
				</div>

				<div className={`${styles.menuSection} small`}>
					<p className="fw-semibold">
						初回来店時 Googleレビュー投稿で
						<br />
						会計¥500OFF !!
					</p>
					<p>投稿後、スタッフまで画面提示お願いします！</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
