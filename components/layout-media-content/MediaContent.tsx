"use client";

import { twMerge } from "tailwind-merge";
import Image, { StaticImageData } from "next/image";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";
import Button from "../block-button/Button";

interface MediaContentProps {
    mediaPosition?: "left" | "right";
    media: StaticImageData | string;
    mediaAlt?: string;
    title?: string;
    content?: string;
    linkUrl?: string;
    linkTitle?: string;
}

const MediaContent: React.FC<MediaContentProps> = ({ mediaPosition = "left", media, mediaAlt = "", title, content, linkUrl, linkTitle }) => {
    const gridClasses = "right" === mediaPosition ? "l-grid--row-reverse-at-lg" : "";
    return (
        <Section className={twMerge(`media-content media-content--media-${mediaPosition}`)}>
            <Container>
                <div className={`l-grid l-grid--align-items_center l-grid--vertical-gap ${gridClasses}`}>
                    <div className="l-grid__cell l-grid__cell--50-at-lg">
                        <Image src={media} alt={mediaAlt} className="media-content__image" />
                    </div>
                    <div className="l-grid__cell l-grid__cell--50-at-lg">
                        <div className="media-content__copy">
                            {title && <h2 className="media-content__title">{title}</h2>}
                            {content && <p className="media-content__content">{content}</p>}
                            {linkUrl && linkTitle && <Button buttonHref={linkUrl} buttonLabel={linkTitle} buttonClassname="button-group__button" />}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default MediaContent;
