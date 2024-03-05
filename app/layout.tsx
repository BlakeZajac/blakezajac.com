import type { Metadata } from "next";

import "../build/css/style.min.css";
import "../build/js/main.min.js";

import SiteHeader from "@/components/layout-site-header/SiteHeader";
import SiteFooter from "@/components/layout-site-footer/SiteFooter";

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
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
