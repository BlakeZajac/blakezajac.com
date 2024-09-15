import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
    className?: string;
    content: string;
}

const RevealText: React.FC<RevealTextProps> = ({ className, content }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const words = content.split(" ");

    return (
        <div ref={ref} className={twMerge(`reveal-text`, className)}>
            {words.map((word, index) => (
                <span key={index} className="reveal-text__word-wrapper">
                    <motion.span
                        initial={{ opacity: 0, y: "100%" }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1.08, 0.38, 0.98],
                            delay: 0.1 + index * 0.05,
                        }}
                        className="reveal-text__word"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </div>
    );
};

export default RevealText;
