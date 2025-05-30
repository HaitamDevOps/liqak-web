import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../_styles/globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Liqak",
  description: "Make your appoinment from home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`dark antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
