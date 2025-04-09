"use client";

import "./header.css";
import { useScrollspy } from "@/hoooks/useScrollSpy";
import { useMobileNavCloseOnLinkClick } from "@/hoooks/useMobileNavCloseOnLinkClick";
import { useMobileNavToggle } from "@/hoooks/useMobileNav";
import Link from "next/dist/client/link";

type PageKey = "homepage-jinbocho" | "softDrinks-jinbocho" | "drinksFood-jinbocho" | "system-jinbocho";
type PageName = "jinbocho" | "holo-holo";
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
		{ key: "access", label: "アクセス" },
	],
	"system-jinbocho": [
		{ key: "shisha", label: "Shisha" },
		{ key: "options", label: "Options" },
		{ key: "wifi", label: "Wi-Fi" },
		{ key: "notes", label: "notes" },
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
};

interface HeaderProps {
	page: PageKey;
	pageName: PageName;
}

const Header: React.FC<HeaderProps> = ({ page, pageName }) => {
	useMobileNavToggle();
	useMobileNavCloseOnLinkClick();
	useScrollspy();

	return (
		<header id="header" className="header fixed-top">
			<div className="branding d-flex align-items-cente">
				<div className="container position-relative d-flex align-items-center justify-content-between">
					<Link href={`/${pageName}`} className="logo d-flex align-items-center me-auto me-xl-0">
						<div className="d-flex">
							<h1 className="sitename">神保町ホロホロシーシャ</h1>
						</div>
					</Link>

					{sections[page]?.length > 0 && (
						<nav id="navmenu" className="navmenu">
							<ul>
								{sections[page].map(({ key, label }, index) => (
									<li key={key}>
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
		</header>
	);
};

export default Header;
