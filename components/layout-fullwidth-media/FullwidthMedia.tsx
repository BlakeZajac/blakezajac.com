import React from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

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
    <div className={twMerge(`fullwidth-media`, className)}>
      <Image src={image} alt={imageAlt} className="fullwidth-media__image" />
    </div>
  );
};

export default FullwidthMedia;
