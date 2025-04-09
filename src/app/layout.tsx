import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // JS initializer functions that may return cleanup functions
import "./globals.css";

const robotoSans = Roboto({
	variable: "--font-roboto-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ホロホロシーシャ",
	description: "Holo Holo Shisha",

	openGraph: {
		title: "ホロホロシーシャ",
		description: "Holo Holo Shisha",
		images: [
			{
				url: "/holo-holo/android-chrome-512x512.png?v=4",
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
		icon: ["/holo-holo/favicon.ico?v=5"],
		apple: ["/holo-holo/apple-touch-icon.png?v=5"],
		shortcut: ["/holo-holo/apple-touch-icon.png"],
	},
	manifest: "/holo-holo/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${robotoSans.variable}`}>{children}</body>
		</html>
	);
}
