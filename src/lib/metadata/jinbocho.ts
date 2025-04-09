// lib/metadata/jinbocho.ts
import { Metadata } from "next";

export const jinbochoMetadata: Metadata = {
	title: "神保町ホロホロシーシャ",
	description: "Holo Holo Shisha Jinbocho",
	openGraph: {
		title: "神保町ホロホロシーシャ",
		description: "Holo Holo Shisha Jinbocho",
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
