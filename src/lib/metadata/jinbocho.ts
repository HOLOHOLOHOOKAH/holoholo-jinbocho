// lib/metadata/jinbocho.ts
import { Metadata } from "next";

export const jinbochoMetadata: Metadata = {
	title: "神保町ホロホロシーシャ",
	description: "神保町駅徒歩2分の【神保町ホロホロシーシャ】は、落ち着いた空間で極上のシーシャを楽しめる東京・千代田区の人気シーシャバー。新御茶ノ水・御茶ノ水からも徒歩圏内。13時〜24時まで年中無休で営業中。予約・お問い合わせは080-6118-4092まで。",
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
