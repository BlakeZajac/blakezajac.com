"use client";

import Container from "../layout-container/Container";
import OffcanvasMenu from "../block-offcanvas-menu/OffcanvasMenu";

const SiteOffcanvas = () => {
    return (
        <div className="site-offcanvas">
            <Container className="site-offcanvas__container">
                <OffcanvasMenu />
            </Container>
        </div>
    );
};

export default SiteOffcanvas;
