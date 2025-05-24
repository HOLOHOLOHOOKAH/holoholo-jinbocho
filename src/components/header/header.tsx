import "./header.css";
import HeaderClient from "./headerClient";
import Link from "next/dist/client/link";

type PageKey = "homepage";
type PageName = "jinbocho" | "okachimachi";
type Title = "神保町ホロホロシーシャ" | "湯島ホロホロシーシャ 上野・御徒町店";

type SectionItem = {
	key: string;
	label: string;
};

const sections: Record<PageKey, SectionItem[]> = {
	homepage: [
		{ key: "root", label: "店舗一覧" },
		{ key: "", label: "トップページ" },
		{ key: "system", label: "システム" },
		{ key: "soft-drinks", label: "ソフトドリンク" },
		{ key: "drinks-food", label: "ドリンク＆フード" },
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
								{sections[page].map(({ key, label }) => {
									const href =
										key === "root"
											? "/" // go to root
											: `/${pageName}${key === "" ? "/" : `/${key}`}`;
									return (
										<li key={key} className="text-uppercase">
											<Link href={href}>{label}</Link>
										</li>
									);
								})}
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
