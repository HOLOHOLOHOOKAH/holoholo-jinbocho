import "./header.css";
import HeaderClient from "./headerClient";
import Link from "next/dist/client/link";

type PageKey = "homepage-jinbocho" | "system-jinbocho" | "softDrinks-jinbocho" | "drinksFood-jinbocho" | "drinksFood-okachimachi" | "softDrinks-okachimachi";
type PageName = "jinbocho" | "okachimachi";
type Title = "神保町ホロホロシーシャ" | "湯島ホロホロシーシャ 上野・御徒町店";

type SectionItem = {
	key: string;
	label: string;
};

const sections: Record<PageKey, SectionItem[]> = {
	"homepage-jinbocho": [
		{ key: "home", label: "home" },
		{ key: "system", label: "システム" },
		{ key: "soft-drinks", label: "ソフトドリンク" },
		{ key: "drinks-food", label: "ドリンク＆フード" },
		{ key: "information", label: "インフォメーション" },
	],
	"system-jinbocho": [
		{ key: "shisha", label: "Shisha" },
		{ key: "options", label: "Options" },
		{ key: "wifi", label: "Wi-Fi" },
		{ key: "notes", label: "notes" },
	],
	"softDrinks-okachimachi": [
		{ key: "soft-drinks", label: "Soft Drinks" },
		{ key: "tea-coffee", label: "Tea/Coffee" },
		{ key: "chai-cocoa", label: "チャイ&ココア" },
	],
	"softDrinks-jinbocho": [
		{ key: "color-drinks", label: "推しカラードリンク" },
		{ key: "fruit-tea", label: "フルーツティー" },
		{ key: "chai-matcha", label: "チャイ&抹茶ミルク" },
		{ key: "other-drinks", label: "Other Drinks" },
	],
	"drinksFood-jinbocho": [
		{ key: "liqueur-beer", label: "Liqueur & Beer" },
		{ key: "snacks", label: "Snacks" },
	],
	"drinksFood-okachimachi": [
		{ key: "bottle-beer", label: "Bottle/Beer" },
		{ key: "liqueur", label: "Liqueur" },
		{ key: "other-drinks", label: "Other Drinks" },
	],
};

interface HeaderProps {
	page: PageKey;
	pageName: PageName;
	title: Title;
}

const Header: React.FC<HeaderProps> = ({ page, pageName, title }) => {
	return (
		<header id="header" className="header fixed-top">
			<div className="branding d-flex align-items-cente">
				<div className="container position-relative d-flex align-items-center justify-content-between">
					<Link href={`/${pageName}`} className="logo d-flex align-items-center me-auto me-xl-0">
						<div className="d-flex">
							<h1 className="sitename">{title}</h1>
						</div>
					</Link>

					{sections[page]?.length > 0 && (
						<nav id="navmenu" className="navmenu">
							<ul>
								{sections[page].map(({ key, label }, index) => (
									<li key={key} className="text-uppercase">
										<a href={`#${key}`} className={index === 0 ? "active" : ""}>
											{label}
										</a>
									</li>
								))}
							</ul>
							<i className="mobile-nav-toggle d-xl-none bi bi-list" />
						</nav>
					)}
				</div>
			</div>

			<HeaderClient />
		</header>
	);
};

export default Header;
