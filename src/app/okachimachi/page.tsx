import Hero from "@/components/hero/hero";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Access from "@/components/access/access";
import CategoryPreview from "@/components/categoryPreview/categoryPreview";
import { holoHoloMetadata } from "@/lib/metadata/holoHolo";

export const metadata = holoHoloMetadata;

const Homepage: React.FC = () => {
	return (
		<span className="fade-in">
			<Header page="homepage-jinbocho" title="御徒町ホロホロシーシャ" pageName="okachimachi" />
			<Hero video="/img/okachimachi/video.mp4" img="/img/okachimachi/logo.png" height={600} width={600} />
			<div id="system" style={{ backgroundColor: "#0d0d0d" }}>
				{" "}
				<CategoryPreview imageSrc="/img/okachimachi/holoholo.jpg" title="システム" paragraph="ドリンクメニューも充実。アルコールはもちろん、豆挽きコーヒーやチャイなど豊富にご用意しております。" buttonText="もっと見る" buttonLink="/okachimachi/system" reverse={true} />
			</div>
			<div id="soft-drinks">
				{" "}
				<CategoryPreview imageSrc="/img/okachimachi/softdrink.jpg" title="ソフトドリンク" paragraph="フレーバーは「FUMARI」「AZURE」「AL FAKHER」の3メーカーを主に使用しています。ニコチンフリーフレーバーのご用意もしております。" buttonText="もっと見る" buttonLink="/okachimachi/soft-drinks" />
			</div>
			<div id="drinks-food" style={{ backgroundColor: "#0d0d0d" }}>
				{" "}
				<CategoryPreview imageSrc="/img/okachimachi/food.jpg" title="ドリンク＆フード" paragraph="ドリンクメニューも充実。アルコールはもちろん、豆挽きコーヒーやチャイなど豊富にご用意しております。" buttonText="もっと見る" buttonLink="/okachimachi/drinks-food" reverse={true} />
			</div>

			<Access page="okachimachi" />
			<Footer />
		</span>
	);
};

export default Homepage;
