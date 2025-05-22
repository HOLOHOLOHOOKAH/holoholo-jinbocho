import { Metadata } from "next";

export const holoHoloMetadata: Metadata = {
	title: "湯島ホロホロシーシャ",
	description: "【湯島ホロホロシーシャ 上野・御徒町店】は、湯島駅徒歩1分、上野・御徒町・秋葉原からも好アクセスのシーシャバー。スタイリッシュな空間で深夜29時まで営業。東京都台東区上野1丁目。ご予約・お問い合わせは070-2644-8150まで。",

	openGraph: {
		title: "湯島ホロホロシーシャ",
		description: "【湯島ホロホロシーシャ 上野・御徒町店】は、湯島駅徒歩1分、上野・御徒町・秋葉原からも好アクセスのシーシャバー。スタイリッシュな空間で深夜29時まで営業。東京都台東区上野1丁目。ご予約・お問い合わせは070-2644-8150まで。",
		images: [
			{
				url: "/okachimachi-holo/android-chrome-512x512.png?v=4",
				width: 800,
				height: 600,
				alt: "【湯島ホロホロシーシャ 上野・御徒町店】は、湯島駅徒歩1分、上野・御徒町・秋葉原からも好アクセスのシーシャバー。スタイリッシュな空間で深夜29時まで営業。東京都台東区上野1丁目。ご予約・お問い合わせは070-2644-8150まで。",
			},
		],
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: ["/okachimachi/favicon.ico?v=5"],
		apple: ["/okachimachi/apple-touch-icon.png?v=5"],
		shortcut: ["/okachimachi/apple-touch-icon.png"],
	},
	manifest: "/okachimachi/site.webmanifest",
};
