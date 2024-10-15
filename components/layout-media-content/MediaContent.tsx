"use client";

import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";
import Button from "@/components/block-button/Button";
import RevealImage from "@/components/block-reveal-image/RevealImage";
import RevealText from "@/components/block-reveal-text/RevealText";

interface MediaContentProps {
  mediaPosition?: "left" | "right";
  image: StaticImageData | string;
  imageAlt?: string;
  title?: string;
  content?: string;
  linkUrl?: string;
  linkTitle?: string;
}

const MediaContent: React.FC<MediaContentProps> = ({
  mediaPosition = "left",
  image,
  imageAlt = "",
  title,
  content,
  linkUrl,
  linkTitle,
}) => {
  const gridClasses =
    "right" === mediaPosition ? "l-grid--row-reverse-at-lg" : "";

  return (
    <Section
      className={twMerge(`media-content media-content--media-${mediaPosition}`)}
    >
      <Container>
        <div
          className={`l-grid l-grid--align-items_center l-grid--vertical-gap ${gridClasses}`}
        >
          <div className="l-grid__cell l-grid__cell--50-at-lg">
            <RevealImage
              className="media-content__image"
              image={image}
              imageAlt={imageAlt}
            />
          </div>

          <div className="l-grid__cell l-grid__cell--50-at-lg">
            <div className="media-content__copy">
              {title && (
                <RevealText
                  as="h2"
                  className="reveal-text--spacing_sm media-content__title"
                  content={title}
                ></RevealText>
              )}
              {content && (
                <RevealText
                  as="p"
                  className="reveal-text--spacing_xs media-content__content"
                  animateBy="line"
                  content={content}
                  delay={0.125}
                />
              )}
              {linkUrl && linkTitle && (
                <Button
                  buttonHref={linkUrl}
                  buttonLabel={linkTitle}
                  buttonClassName="button-group__button"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MediaContent;
