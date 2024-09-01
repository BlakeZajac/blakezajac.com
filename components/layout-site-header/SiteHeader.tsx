import SiteBrand from "../block-site-brand/SiteBrand";
import PrimaryMenu from "../block-primary-menu/PrimaryMenu";
import SiteOffcanvasTrigger from "../block-site-offcanvas-trigger/SiteOffcanvasTrigger";
import Container from "../layout-container/Container";

const SiteHeader = () => {
    return (
        <header className="site-header">
            <Container className="site-header__container">
                <div className="site-header__unit site-header__unit--site-brand">
                    <SiteBrand link="/" />
                </div>
                <div className="site-header__unit site-header__unit--primary-menu">
                    <PrimaryMenu />
                </div>
                <div className="site-header__unit site-header__unit--site-offcanvas-trigger">
                    <SiteOffcanvasTrigger />
                </div>
            </Container>
        </header>
    );
};

export default SiteHeader;
