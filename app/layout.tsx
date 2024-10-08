import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

// setup dm_sans font
const dm_sans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

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
		<html lang="en" className={cn(dm_sans.className)}>
			<body>
				<Providers>
					<div className="p-4">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
