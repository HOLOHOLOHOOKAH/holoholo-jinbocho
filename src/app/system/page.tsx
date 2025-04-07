import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./system.module.css";

const Homepage: React.FC = () => {
	return (
		<div className="px-3" style={{ backgroundImage: "url('/img/bg22.png')" }}>
			<Header page="system" />
			<div style={{ height: "130px" }}></div>
			<div style={{ maxWidth: "900px" }} className={`${styles.menuContainer}  container text-white py-5 px-4`}>
				<div className="text-center mb-4">
					<h1 className="fw-bold mb-5">システム</h1>
				</div>

				<div className={styles.menuSection}>
					<h4 className="fw-semibold my-4">Shisha</h4>
					<p>シーシャ: ¥1,800</p>
					<p>ドリンク: ¥500〜</p>
					<p>チャージ: ¥700</p>
					<p>シェア: ¥1,000</p>
					<p>1台につき2名様まで</p>
				</div>

				<div className={styles.menuSection}>
					<h5 className="fw-semibold my-4">Option</h5>
					<p>トップ替え: ¥1,500</p>
					<p>アイスホース: ¥300</p>
					<p>ジュースボトル: ¥700</p>
					<p>アルコールボトル: ¥1000</p>
				</div>

				<div className={`${styles.menuSection} small`}>
					<h5 className="fw-semibold my-4">Notes</h5>
					<p>※ フードのみ持ち込み可能 ※シーシャ機材にはお手を触れないようお願い致します。</p>
					<p>※ ボトルやトップ等機材の破損の場合、実費を頂きます。</p>
					<p>※ 混雑時のみお席2時間制となります。</p>
				</div>

				<div className={`${styles.menuSection} small`}>
					<h5 className="fw-semibold my-4">W-Fi</h5>
					<p>SD: Holojinbocho_5G</p>
					<p>PW: 5EEVK33762</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
