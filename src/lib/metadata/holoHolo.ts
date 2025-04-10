import { Metadata } from "next";

export const holoHoloMetadata: Metadata = {
	title: "ホロホロシーシャ",
	description: "Holo Holo Shisha",

	openGraph: {
		title: "ホロホロシーシャ",
		description: "Holo Holo Shisha",
		images: [
			{
				url: "/okachimachi-holo/android-chrome-512x512.png?v=4",
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
		icon: ["/okachimachi/favicon.ico?v=5"],
		apple: ["/okachimachi/apple-touch-icon.png?v=5"],
		shortcut: ["/okachimachi/apple-touch-icon.png"],
	},
	manifest: "/okachimachi/site.webmanifest",
};
