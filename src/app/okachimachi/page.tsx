import Hero from "@/components/hero/hero";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Access from "@/components/access/access";
import CategoryPreview from "@/components/categoryPreview/categoryPreview";
import { holoHoloMetadata } from "@/lib/metadata/holoHolo";

export const metadata = holoHoloMetadata;

const Homepage: React.FC = () => {
	const Separator = ({ position = "center" }) => {
		const getFlex = () => {
			switch (position) {
				case "left":
					return ["0.25", "0.75"];
				case "right":
					return ["0.75", "0.25"];
				default:
					return ["1", "1"];
			}
		};

		const [leftFlex, rightFlex] = getFlex();

		return (
			<div
				style={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					margin: "2rem 0",
				}}
			>
				<div
					style={{
						flex: leftFlex,
						height: "2px",
						background: "linear-gradient(to right, transparent, #ddd)",
					}}
				/>
				<div
					style={{
						width: "36px",
						height: "4px",
						backgroundColor: "#ddd",
						borderRadius: "2px",
						margin: "0 2rem",
					}}
				/>
				<div
					style={{
						flex: rightFlex,
						height: "2px",
						background: "linear-gradient(to right, #ddd, transparent)",
					}}
				/>
			</div>
		);
	};

	return (
		<span className="fade-in">
			<Header page="homepage" title="湯島ホロホロシーシャ 上野・御徒町店" pageName="okachimachi" />
			<Hero video="/img/okachimachi/holoholo.jpg" img="/img/okachimachi/logo.png" height={600} width={600} />
			<div id="system">
				{" "}
				<CategoryPreview imageSrc="/img/okachimachi/holoholo.jpg" title="システム" paragraph="ドリンクメニューも充実。アルコールはもちろん、豆挽きコーヒーやチャイなど豊富にご用意しております。" buttonText="もっと見る" buttonLink="/okachimachi/system" reverse={true} />
			</div>
			<Separator position="center" />

			<div id="soft-drinks">
				{" "}
				<CategoryPreview imageSrc="/img/okachimachi/softdrink.jpg" title="ソフトドリンク" paragraph="フレーバーは「FUMARI」「AZURE」「AL FAKHER」の3メーカーを主に使用しています。ニコチンフリーフレーバーのご用意もしております。" buttonText="もっと見る" buttonLink="/okachimachi/soft-drinks" />
			</div>
			<Separator position="center" />

			<div id="drinks-food">
				{" "}
				<CategoryPreview imageSrc="/img/okachimachi/food.jpg" title="ドリンク＆フード" paragraph="ドリンクメニューも充実。アルコールはもちろん、豆挽きコーヒーやチャイなど豊富にご用意しております。" buttonText="もっと見る" buttonLink="/okachimachi/drinks-food" reverse={true} />
			</div>
			<Separator position="center" />

			<div className="mb-5 ">
				{" "}
				<Access page="okachimachi" />
			</div>

			<Footer page="okachimachi" />
		</span>
	);
};

export default Homepage;
