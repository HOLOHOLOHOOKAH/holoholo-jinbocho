import Hero from "@/components/hero/hero";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Access from "@/components/access/access";
import CategoryPreview from "@/components/categoryPreview/categoryPreview";
import { jinbochoMetadata } from "@/lib/metadata/jinbocho";

export const metadata = jinbochoMetadata;

const Homepage: React.FC = () => {
	return (
		<span className="fade-in">
			<Header title="神保町ホロホロシーシャ" page="homepage" pageName="jinbocho" />
			<Hero video="/img/jinbocho/video.mp4" img="/img/jinbocho/logo.png" height={600} width={600} />
			<div id="system" style={{ backgroundColor: "#161616" }}>
				{" "}
				<CategoryPreview imageSrc="/img/jinbocho/bg12.png" title="システム" paragraph="ドリンクメニューも充実。アルコールはもちろん、豆挽きコーヒーやチャイなど豊富にご用意しております。" buttonText="もっと見る" buttonLink="/jinbocho/system" reverse={true} />
			</div>
			<div id="soft-drinks">
				{" "}
				<CategoryPreview imageSrc="/img/jinbocho/shishaimg.jpg" title="ソフトドリンク" paragraph="フレーバーは「FUMARI」「AZURE」「AL FAKHER」の3メーカーを主に使用しています。ニコチンフリーフレーバーのご用意もしております。" buttonText="もっと見る" buttonLink="/jinbocho/soft-drinks" />
			</div>
			<div id="drinks-food" style={{ backgroundColor: "#161616" }}>
				{" "}
				<CategoryPreview imageSrc="/img/jinbocho/drinksimg.jpg" title="ドリンク＆フード" paragraph="ドリンクメニューも充実。アルコールはもちろん、豆挽きコーヒーやチャイなど豊富にご用意しております。" buttonText="もっと見る" buttonLink="/jinbocho/drinks-food" reverse={true} />
			</div>

			<div className="mb-5">
				{" "}
				<Access page="jinbocho" />
			</div>
			<Footer page="jinbocho" />
		</span>
	);
};

export default Homepage;
