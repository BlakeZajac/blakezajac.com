"use client";

import { twMerge } from "tailwind-merge";

import Container from "@/components/layout-container/Container";
import Badge from "@/components/block-badge/Badge";
import RevealText from "@/components/block-reveal-text/RevealText";
import RevealImage from "@/components/block-reveal-image/RevealImage";

// @todo - Load from Sanity CMS
interface HeroProps {
    className?: string;
    badge?: string;
    title?: string;
    description01?: string;
    description02?: string;
    image?: string;
    imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({ className, badge, title, description01, description02, image, imageAlt = "" }) => {
    const componentClasses = `hero ${badge ? "hero--has-badge" : ""} ${image ? "hero--has-image" : ""}`;

    return (
        <div className={twMerge(componentClasses, className)}>
            <Container className="hero__container">
                {badge && <Badge label={badge} />}

                {title && <RevealText as="h1" className="reveal-text--spacing_sm-below-md hero__title" content={title} />}

                {(description01 || description02) && (
                    <div className="hero__content copy">
                        {description01 && <RevealText as="p" className="reveal-text--spacing_sm" animateBy="line" content={description01} delay={0.25} />}
                        {description02 && <RevealText as="p" className="reveal-text--spacing_sm" animateBy="line" content={description02} delay={0.5} />}
                    </div>
                )}

                {image && <RevealImage className="hero-media" image={image} imageAlt={imageAlt} isRounded />}
            </Container>
        </div>
    );
};

export default Hero;
