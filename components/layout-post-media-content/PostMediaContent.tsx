"use client";

import { Image, StaticImageData } from "next/image";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";

interface PostMediaContentProps {
    mediaPosition?: "left" | "right";
    media: StaticImageData | string;
    mediaAlt?: string;
    title?: string;
    content?: string;
}

const PostMediaContent: React.FC<PostMediaContentProps> = ({ mediaPosition = "right", media, mediaAlt, title, content }) => {
    const gridClasses = "right" === mediaPosition ? "l-grid--row-reverse-at-lg" : "";

    return (
        <Section>
            <Container>
                <div className="post-media-content">
                    <div className={`post-media-content__grid l-grid--align-items_flex-end l-grid--inset-below-lg ${gridClasses} `}>
                        <div className="post-media-content__cell post-media-content__cell--media l-grid__cell l-grid__cell--50-at-lg l-grid__cell--60-at-xl l-grid__cell--70-at-2xl l-grid__cell--inset-below-lg">
                            <div className="post-media-content__media"></div>
                        </div>
                        <div className="post-media-content__cell post-media-content__cell--content l-grid__cell l-grid__cell--50-at-lg l-grid__cell--40-at-xl l-grid__cell--30-at-2xl l-grid__cell--inset-below-lg">
                            <div className="post-media-content__copy copy copy--spacing_sm">
                                <h2 className="post-media-content__title">Title</h2>
                                <p>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and
                                    visual mockups.
                                </p>
                                <p>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and
                                    visual mockups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default PostMediaContent;
