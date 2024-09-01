export default function StudioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="site-main" id="main">
                    {children}
                </main>
            </body>
        </html>
    );
}
