import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Recipe Finder",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="w-full">
            <body
                className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased bg-white text-black`}
            >
                <div className="lg:w-5xl w-full h-full m-auto py-4 flex flex-col justify-center">
                    <h1 className="text-3xl mb-4 text-center"><Link href="/">Recipe Finder</Link></h1>
                    <div className="w-full h-full">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
