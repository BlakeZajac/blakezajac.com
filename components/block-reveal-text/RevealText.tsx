import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
    className?: string;
    content: string;
    as?: React.ElementType;
}

const RevealText: React.FC<RevealTextProps> = ({ className, content, as: Component = "div" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const words = content.split(" ");

    return (
        <Component ref={ref} className={twMerge(`reveal-text`, className)}>
            {words.map((word, index) => (
                <span key={index} className="reveal-text__word-wrapper">
                    <motion.span
                        initial={{ opacity: 0, y: "100%" }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1.08, 0.38, 0.98],
                            delay: index * 0.05,
                        }}
                        className="reveal-text__word"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Component>
    );
};

export default RevealText;
