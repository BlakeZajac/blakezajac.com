export default function RootLayout({
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
                <main className="site-main" id="main">
                    {children}
                </main>
            </body>
        </html>
    );
}
