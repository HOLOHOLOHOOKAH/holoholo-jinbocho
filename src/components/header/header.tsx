"use client";

import Link from "next/link";
import "./header.css";
import { useScrollspy } from "@/hoooks/useScrollSpy";
import { useMobileNavCloseOnLinkClick } from "@/hoooks/useMobileNavCloseOnLinkClick";
import { useMobileNavToggle } from "@/hoooks/useMobileNav";

type PageKey = "homepage" | "flavors" | "drinks" | "snacks" | "system";

type SectionItem = {
	key: string;
	label: string;
};

const sections: Record<PageKey, SectionItem[]> = {
	homepage: [
		{ key: "home", label: "トップ" },
		{ key: "system", label: "システム" },
		{ key: "flavors", label: "フレーバー" },
		{ key: "drinks-food", label: "ドリンク＆フード" },
		{ key: "access", label: "アクセス" },
	],
	flavors: [
		{ key: "home", label: "Home" },
		{ key: "recommended-mixes", label: "Recommended Mixes" },
		{ key: "flavors", label: "Flavors" },
	],
	drinks: [{ key: "home", label: "Home" }],
	snacks: [{ key: "home", label: "Home" }],
	system: [],
};

interface HeaderProps {
	page: PageKey;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
	useMobileNavToggle();
	useMobileNavCloseOnLinkClick();
	useScrollspy();

	return (
		<header id="header" className="header fixed-top">
			<div className="branding d-flex align-items-cente">
				<div className="container position-relative d-flex align-items-center justify-content-between">
					<Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
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
