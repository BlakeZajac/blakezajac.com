"use client";

import { usePathname } from "next/navigation";

import SocialMedia from "../block-social-media/SocialMedia";
import Container from "../layout-container/Container";
import SiteLegal from "../block-site-legal/SiteLegal";
import WordToggle from "../block-word-toggle/WordToggle";

const wordToggleTitles = [
    "the next best thing",
    "something unique",
    "something fun",
    "something exciting",
];

const SiteFooter = () => {
    const pathname = usePathname();
    const isContactPage = pathname === "/contact";

    return (
        <footer className="site-footer">
            <Container
                className={`${
                    isContactPage
                        ? "l-container--max-width_1440 site-footer__container--sm"
                        : "site-footer__container"
                }`}
            >
                {!isContactPage && (
                    <div className="site-footer__unit site-footer__unit--cta">
                        <WordToggle
                            href="/contact/"
                            title="Let's make"
                            secondaryTitle={wordToggleTitles}
                        />
                    </div>
                )}
                <div className="site-footer__unit site-footer__unit--socket">
                    <div className="site-footer__unit site-footer__unit--site-legal">
                        <SiteLegal />
                    </div>
                    <div className="site-footer__unit site-footer__unit--social-media">
                        <SocialMedia />
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default SiteFooter;
