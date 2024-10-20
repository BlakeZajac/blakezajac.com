"use client";

import { usePathname } from "next/navigation";

import SocialMedia from "@/components/block-social-media/SocialMedia";
import Container from "@/components/layout-container/Container";
import SiteLegal from "@/components/block-site-legal/SiteLegal";
import FooterCta from "@/components/block-footer-cta/FooterCta";

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
            <FooterCta />
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
