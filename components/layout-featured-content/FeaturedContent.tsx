"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";
import Button from "@/components/block-button/Button";
import Statistic from "@/components/block-statistic/Statistic";
import RevealText from "@/components/block-reveal-text/RevealText";
import RevealImage from "../block-reveal-image/RevealImage";

interface FeaturedContentProps {
    mediaPosition?: "left" | "right";
    title?: string;
    content01?: string;
    content02?: string;
    buttonHref?: string;
    buttonLabel?: string;
    statisticNumber01?: string;
    statisticNumberSuffix01?: string;
    statisticContent01?: string;
    statisticNumber02?: string;
    statisticNumberSuffix02?: string;
    statisticContent02?: string;
    image?: string;
    imageAlt?: string;
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({
    mediaPosition,
    title,
    content01,
    content02,
    buttonHref,
    buttonLabel,
    statisticNumber01,
    statisticNumberSuffix01,
    statisticContent01,
    statisticNumber02,
    statisticNumberSuffix02,
    statisticContent02,
    image,
    imageAlt = "",
}) => {
    const componentClass = `${mediaPosition === "left" ? "featured-content--media-left" : "featured-content--media-right"}`;
    const gridClass = `${mediaPosition === "left" && "l-grid--row-reverse-at-lg"}`;

    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isLargeScreen = windowWidth >= 1024;

    const renderStatistics = () => {
        return (
            <div className="featured-content__unit featured-content__unit--statistic">
                {statisticNumber01 && <Statistic number={statisticNumber01} numberSuffix={statisticNumberSuffix01} content={statisticContent01} />}
                {statisticNumber02 && <Statistic number={statisticNumber02} numberSuffix={statisticNumberSuffix02} content={statisticContent02} />}
            </div>
        );
    };

    return (
        <Section className={`featured-content ${componentClass}`}>
            <Container className="featured-content__container">
                {title ? <RevealText as="h2" className="reveal-text--spacing_sm-below-md featured-content__title" content={title} /> : ""}

                <div className={`featured-content__grid l-grid ${gridClass}`}>
                    <div className="featured-content__cell featured-content__cell--content l-grid__cell l-grid__cell--50-at-lg l-grid__cell--33-at-2xl">
                        <div className="featured-content__unit featured-content__unit--copy copy">
                            {content01 && <RevealText className="reveal-text--spacing_xs" as="p" content={content01} duration={2} delay={0.125} />}
                            {content02 && <RevealText className="reveal-text--spacing_xs" as="p" content={content02} duration={2} delay={0.25} />}
                            {buttonHref && <Button buttonHref={buttonHref} buttonLabel={buttonLabel} />}
                        </div>
                        {isLargeScreen && renderStatistics()}
                    </div>

                    <div className="featured-content__cell featured-content__cell--media l-grid__cell l-grid__cell--50-at-lg l-grid__cell--66-at-2xl">
                        {image && (
                            <div className="featured-content__unit featured-content__unit--media">
                                <RevealImage image={image} imageAlt={imageAlt} />
                            </div>
                        )}
                        {!isLargeScreen && renderStatistics()}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default FeaturedContent;
