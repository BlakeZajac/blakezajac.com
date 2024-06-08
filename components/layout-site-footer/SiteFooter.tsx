import SocialMedia from "../block-social-media/SocialMedia";
import Container from "../layout-container/Container";
import SiteLegal from "../block-site-legal/SiteLegal";
import WordToggle from "../block-word-toggle/WordToggle";

const SiteFooter = () => {
    return (
        <footer className="site-footer">
            <Container className="site-footer__container">
                <div className="site-footer__unit site-footer__unit--cta">
                    <WordToggle
                        href="/contact/"
                        title="Let's make"
                        secondaryTitle="the next best thing"
                    />
                </div>
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
