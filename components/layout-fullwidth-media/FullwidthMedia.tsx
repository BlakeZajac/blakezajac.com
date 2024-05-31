import React from "react";
import Image, { StaticImageData } from "next/image";

import { twMerge } from "tailwind-merge";

import Section from "../layout-section/Section";

interface FullwidthMediaProps {
  className?: string;
  image: StaticImageData | string;
  imageAlt: string;
}

const FullwidthMedia: React.FC<FullwidthMediaProps> = ({
  className,
  image,
  imageAlt,
}) => {
  return (
    <Section className={twMerge(`fullwidth-media`, className)}>
      <Image src={image} alt={imageAlt} className="fullwidth-media__image" />
    </Section>
  );
};

export default FullwidthMedia;
