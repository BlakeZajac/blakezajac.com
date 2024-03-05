import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../build/css/style.min.css";
import "../build/js/main.min.js";

import SiteHeader from "@/components/layout-site-header/SiteHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blake Zajac",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
