import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Only8",
	description: "Give permissions to others to eat with you",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
