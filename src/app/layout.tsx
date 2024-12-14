import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const title = "Kavin S";
const description =
	"Kavin is an 21-year-old startup founder and developer building in the internet. She studies software engineering at Swinburne.";

export const metadata: Metadata = {
	title: title,
	description: description,
	keywords: ["kavin shanmugam", "kavin", "shanmugam", "stanford", "startup", "founder", "design", "engineer", "builder", "machine learning", "ai", "computer science", "product design"],
	openGraph: {
		title: title,
		description: description,
		siteName: title,
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/opengraph.png",
				width: 1200,
				height: 630,
				alt: "Tina Mai",
			},
		],
		url: "https://skavin.me",
	},
	twitter: {
		title: title,
		description: description,
		images: [
			{
				url: "/twitter-image.png",
				width: 1200,
				height: 630,
				alt: "Kavin S",
			},
		],
		// use 'summary' for small image (e.g. profile pic), 'summary_large_image' for large
		card: "summary_large_image",
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	applicationName: title,
	icons: {
		icon: [
			{ 
				url: '/favicon.ico', 
				type: 'image/x-icon' 
			},
			{ 
				url: '/favicon-16x16.png', 
				sizes: '16x16', 
				type: 'image/png' 
			},
			{ 
				url: '/favicon-32x32.png', 
				sizes: '32x32', 
				type: 'image/png' 
			},
		],
		apple: [
			{ 
				url: '/apple-touch-icon.png', 
				sizes: '180x180' 
			}
		],
		shortcut: ['/favicon.ico']
	},
	metadataBase: new URL("https://skavin.me"),
	alternates: { canonical: "https://skavin.me" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
