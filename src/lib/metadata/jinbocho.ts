// lib/metadata/jinbocho.ts
import { Metadata } from "next";

export const jinbochoMetadata: Metadata = {
	title: "神保町ホロホロシーシャ",
	description: "神保町駅徒歩2分の【神保町ホロホロシーシャ】は、落ち着いた空間で極上のシーシャを楽しめる東京・千代田区の人気シーシャバー。新御茶ノ水・御茶ノ水からも徒歩圏内。13時〜24時まで年中無休で営業中。予約・お問い合わせは080-6118-4092まで。",
	keywords: ["神保町", "シーシャ", "シーシャバー", "東京", "ホロホロシーシャ", "水タバコ", "Shisha Tokyo", "Jimbocho"],

	openGraph: {
		title: "神保町ホロホロシーシャ",
		description: "神保町駅徒歩2分の【神保町ホロホロシーシャ】は、落ち着いた空間で極上のシーシャを楽しめる東京・千代田区の人気シーシャバー。新御茶ノ水・御茶ノ水からも徒歩圏内。13時〜24時まで年中無休で営業中。予約・お問い合わせは080-6118-4092まで。",
		images: [
			{
				url: "/jinbocho/android-chrome-512x512.png?v=4",
				width: 800,
				height: 600,
				alt: "Holo Holo Shisha",
			},
		],
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "神保町ホロホロシーシャ",
		description: "神保町駅徒歩2分の人気シーシャバー。落ち着いた空間で極上のシーシャ体験を。新御茶ノ水・御茶ノ水からもアクセス良好。",
		images: ["/jinbocho/android-chrome-512x512.png?v=4"],
	},

	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: ["/jinbocho/favicon.ico?v=5"],
		apple: ["/jinbocho/apple-touch-icon.png?v=5"],
		shortcut: ["/jinbocho/apple-touch-icon.png"],
	},
	manifest: "/jinbocho/site.webmanifest",
};
