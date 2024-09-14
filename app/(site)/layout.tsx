import type { Metadata } from "next";

import "@/build/css/style.min.css";
import "@/build/js/main.min.js";

import LenisProvider from "@/providers/LenisProvider";
import SvgSprite from "@/components/block-svg-sprite/SvgSprite";

import SiteHeader from "@/components/layout-site-header/SiteHeader";
import SiteFooter from "@/components/layout-site-footer/SiteFooter";
import SkipToMain from "@/components/layout-skip-to-main/SkipToMain";
import SiteOffcanvas from "@/components/layout-site-offcanvas/SiteOffcanvas";

export const metadata: Metadata = {
    title: "Blake Zajac",
    description: "Portfolio Website",
};

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/lec4mqw.css" />
            </head>

            <body>
                <SvgSprite />
                <LenisProvider>
                    <SkipToMain />
                    <SiteHeader />

                    <main className="site-main" id="main">
                        {children}
                    </main>

                    <SiteFooter />
                    <SiteOffcanvas />
                </LenisProvider>
            </body>
        </html>
    );
}
