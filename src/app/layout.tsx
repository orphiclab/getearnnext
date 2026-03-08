import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "Get Earn Next - Earn Money From Your Fingertips",
    description: "Turn your free time on social media into real income. Follow, Like, Comment, and Watch videos to earn rewards.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`scroll-smooth ${dmSans.variable} ${playfair.variable}`}>
            <body className="bg-background text-foreground antialiased min-h-screen font-sans">
                {children}
            </body>
        </html>
    );
}
