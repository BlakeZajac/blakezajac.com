import type { Metadata } from "next";

import "../build/css/style.min.css";
import "../build/js/main.min.js";

import SiteHeader from "@/components/layout-site-header/SiteHeader";
import SiteFooter from "@/components/layout-site-footer/SiteFooter";
import SkipToMain from "@/components/layout-skip-to-main/SkipToMain";
import SiteOffcanvas from "@/components/layout-site-offcanvas/SiteOffcanvas";

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
        {/* <SkipToMain /> */}
        <SiteHeader />
        {children}
        {/* <SiteFooter />
        <SiteOffcanvas /> */}
      </body>
    </html>
  );
}
