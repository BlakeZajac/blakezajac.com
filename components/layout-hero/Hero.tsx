"use client";

import { twMerge } from "tailwind-merge";

import Container from "../layout-container/Container";
import Badge from "../block-badge/Badge";
import Image, { StaticImageData } from "next/image";

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

const Hero: React.FC<HeroProps> = ({
  className,
  badge,
  title,
  description01,
  description02,
  image,
  imageAlt = "",
}) => {
  const componentClasses = `hero ${badge ? "hero--has-badge" : ""} ${
    image ? "hero--has-image" : ""
  }`;
  return (
    <div className={twMerge(componentClasses, className)}>
      <Container className="hero__container">
        {badge && <Badge label={badge} />}
        {title && <h1 className="hero__title">{title}</h1>}
        <div className="hero__content copy">
          {description01 ? <p>{description01}</p> : ""}
          {description02 ? <p>{description02}</p> : ""}
        </div>
        {image && (
          <Image className="hero__media u-rounded" src={image} alt={imageAlt} />
        )}
      </Container>
    </div>
  );
};

export default Hero;
