import Hero from "@/components/hero/hero";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Access from "@/components/access/access";
import CategoryPreview from "@/components/categoryPreview/categoryPreview";

const Homepage: React.FC = () => {
	return (
		<>
			<Header page="homepage" />
			<Hero />
			<div id="system" style={{ backgroundColor: "#0d0d0d" }}>
				{" "}
				<CategoryPreview imageSrc="/img/bg12.png" title="システム" paragraph="ドリンクメニューも充実。アルコールはもちろん、豆挽きコーヒーやチャイなど豊富にご用意しております。" buttonText="もっと見る" buttonLink="/system" reverse={true} />
			</div>
			<div id="flavors">
				{" "}
				<CategoryPreview imageSrc="/img/shishaimg.jpg" title="フレーバー" paragraph="フレーバーは「FUMARI」「AZURE」「AL FAKHER」の3メーカーを主に使用しています。ニコチンフリーフレーバーのご用意もしております。" buttonText="もっと見る" buttonLink="/flavors" />
			</div>
			<div id="drinks-food" style={{ backgroundColor: "#0d0d0d" }}>
				{" "}
				<CategoryPreview imageSrc="/img/drinksimg.jpg" title="ドリンク＆フード" paragraph="ドリンクメニューも充実。アルコールはもちろん、豆挽きコーヒーやチャイなど豊富にご用意しております。" buttonText="もっと見る" buttonLink="/drinks-food" reverse={true} />
			</div>

			<Access />
			<Footer />
		</>
	);
};

export default Homepage;
