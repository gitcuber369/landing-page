import type { Metadata } from "next";
import "./globals.css";
import Header from "@/sections/Header";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Startup Landing page template",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
