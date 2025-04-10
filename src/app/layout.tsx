import { Delius } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // JS initializer functions that may return cleanup functions
import "./globals.css";

const robotoSans = Delius({
	weight: "400",
	variable: "--font-roboto-sans",
	subsets: ["latin"],
});

import { holoHoloMetadata } from "@/lib/metadata/holoHolo";
export const metadata = holoHoloMetadata;
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
