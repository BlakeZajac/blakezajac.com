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
  imageAlt,
}) => {
  return (
    <div className={twMerge(className, `hero`)}>
      <Container className="hero__container">
        {badge ? <Badge label={badge} /> : ""}
        {title ? <h1 className="hero__title">{title}</h1> : ""}
        {description01 || description02 ? (
          <div className="hero__content">
            {description01 ? <p>{description01}</p> : ""}
            {description02 ? <p>{description02}</p> : ""}
          </div>
        ) : (
          ""
        )}
        {image ? (
          <Image className="hero__media" src={image} alt={imageAlt} />
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default Hero;
