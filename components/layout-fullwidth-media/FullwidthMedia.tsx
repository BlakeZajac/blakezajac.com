import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

import Section from "@/components/layout-section/Section";
import RevealImage from "@/components/block-reveal-image/RevealImage";

interface FullwidthMediaProps {
    className?: string;
    image: StaticImageData | string;
    imageAlt: string;
}

const FullwidthMedia: React.FC<FullwidthMediaProps> = ({ className, image, imageAlt }) => {
    return (
        <Section className={twMerge(`fullwidth-media`, className)}>
            <RevealImage className="fullwidth-media__image" image={image} imageAlt={imageAlt} isRounded={false} />
        </Section>
    );
};

export default FullwidthMedia;
