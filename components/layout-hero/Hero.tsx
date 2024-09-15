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

                {title && <RevealText as="h1" className="hero__title" content={title} />}

                <div className="hero__content copy">
                    {description01 ? <p>{description01}</p> : ""}
                    {description02 ? <p>{description02}</p> : ""}
                </div>

                {image && (
                    <div className="hero-media u-rounded">
                        <motion.div
                            initial={{ scaleY: 0, originY: 0 }}
                            animate={isInView ? { scaleY: 1 } : {}}
                            transition={{
                                duration: 2,
                                ease: [0.16, 1.08, 0.38, 0.98],
                            }}
                            className="hero-media__background "
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
