"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";

import Container from "@/components/layout-container/Container";
import Badge from "@/components/block-badge/Badge";
import RevealText from "@/components/block-reveal-text/RevealText";

// @todo - Load from Sanity CMS
interface HeroProps {
    className?: string;
    badge?: string;
    title?: string;
    description01?: string;
    description02?: string;
    image?: StaticImageData | string;
    imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({ className, badge, title, description01, description02, image, imageAlt = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const componentClasses = `hero ${badge ? "hero--has-badge" : ""} ${image ? "hero--has-image" : ""}`;

    return (
        <div ref={ref} className={twMerge(componentClasses, className)}>
            <Container className="hero__container">
                {badge && <Badge label={badge} />}

                {title && <RevealText as="h1" className="reveal-text--spacing_sm-below-md hero__title" content={title} />}

                {(description01 || description02) && (
                    <div className="hero__content copy">
                        {description01 && <RevealText as="p" className="reveal-text--spacing_sm" animateBy="line" content={description01} delay={0.25} />}
                        {description02 && <RevealText as="p" className="reveal-text--spacing_sm" animateBy="line" content={description02} delay={0.5} />}
                    </div>
                )}

                {image && (
                    <div className="hero-media u-rounded">
                        <motion.div
                            initial={{ scaleY: 1, originY: "100%" }}
                            animate={isInView ? { scaleY: 0 } : {}}
                            transition={{
                                duration: 2,
                                ease: [0.16, 1.08, 0.38, 0.98],
                            }}
                            className="hero-media__background"
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 1.25 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ duration: 2.5, ease: [0.16, 1.08, 0.38, 0.98] }}
                        >
                            <Image className="hero-media__image" src={image} alt={imageAlt} />
                        </motion.div>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Hero;
