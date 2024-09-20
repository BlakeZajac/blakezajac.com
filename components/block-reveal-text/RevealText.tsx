import React, { useRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
    className?: string;
    content: string | ReactNode;
    as?: React.ElementType;
    animateBy?: "word" | "line";
    duration?: number;
    delay?: number | ((index: number) => number);
}

const RevealText: React.FC<RevealTextProps> = ({ className, content, as: Component = "div", animateBy = "word", duration = 1.2, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const items = typeof content === "string" ? (animateBy === "word" ? content.split(" ") : content.split("\n")) : [];

    const getDelay = (index: number) => {
        if (typeof delay === "number") {
            return delay;
        } else if (typeof delay === "function") {
            return delay(index);
        }

        return index * 0.05;
    };

    const renderContent = () => {
        if (typeof content === "string") {
            return items.map((item, index) => (
                <span key={index} className="reveal-text__item-wrapper">
                    <motion.span
                        initial={{ opacity: 0, y: "100%" }}
                        animate={isInView && { opacity: 1, y: 0 }}
                        transition={{
                            duration: duration,
                            ease: [0.16, 1.08, 0.38, 0.98],
                            delay: getDelay(index),
                        }}
                        className="reveal-text__item"
                    >
                        {item}
                    </motion.span>
                </span>
            ));
        } else {
            return (
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={isInView && { opacity: 1, y: 0 }}
                    transition={{
                        duration: duration,
                        ease: [0.16, 1.08, 0.38, 0.98],
                        delay: typeof delay === "number" ? delay : 0,
                    }}
                >
                    {content}
                </motion.div>
            );
        }
    };

    return (
        <Component ref={ref} className={twMerge(`reveal-text`, className)}>
            {renderContent()}
        </Component>
    );
};

export default RevealText;
