import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";

interface RevealImageProps {
    className?: string;
    duration?: number;
    ease?: number[];
    delay?: number;
    image: StaticImageData | string;
    imageAlt: string;
    isRounded?: boolean;
    width?: number;
    height?: number;
}

const RevealImage: React.FC<RevealImageProps> = ({
    className,
    duration = 2,
    delay = 0,
    image,
    imageAlt = "",
    ease = [0.16, 1.08, 0.38, 0.98],
    isRounded = true,
    width = 1920,
    height = 1080,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const backgroundClass = className && `${className}__background`;
    const imageClass = className && `${className}__image`;

    return (
        <div ref={ref} className={twMerge("reveal-image", className, isRounded && "u-rounded")}>
            <motion.div
                initial={{ scaleY: 1, originY: "100%" }}
                animate={isInView ? { scaleY: 0 } : {}}
                transition={{
                    duration: duration,
                    ease: ease,
                }}
                className={`reveal-image__background ${backgroundClass}`}
            ></motion.div>

            <motion.div
                initial={{ scale: 1.25 }}
                animate={isInView && { scale: 1 }}
                transition={{ duration: 2.5, ease: [0.16, 1.08, 0.38, 0.98], delay: delay }}
                className="reveal-image__image-wrapper"
            >
                <Image
                    className={`reveal-image__image ${imageClass}`}
                    src={typeof image === "string" ? image : image.src}
                    alt={imageAlt}
                    width={typeof image === "string" ? width : image.width}
                    height={typeof image === "string" ? height : image.height}
                />
            </motion.div>
        </div>
    );
};

export default RevealImage;
