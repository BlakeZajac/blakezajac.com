"use client";

import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";
import RevealText from "@/components/block-reveal-text/RevealText";

interface CalloutContentProps {
    className?: string;
    content: string;
}

const CalloutContent: React.FC<CalloutContentProps> = ({ className, content }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <Section ref={ref} className={twMerge(`callout-content`, className)}>
            <Container className="callout-content__container">
                <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{
                        duration: 2,
                        ease: [0.16, 1.08, 0.38, 0.98],
                    }}
                    className="callout-content__background callout-content__background--black"
                ></motion.div>
                <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{
                        duration: 2,
                        ease: [0.16, 1.08, 0.38, 0.98],
                        delay: 0.1,
                    }}
                    className="callout-content__background callout-content__background--orange"
                ></motion.div>

                <RevealText content={content} className="callout-content__content" />
            </Container>
        </Section>
    );
};

export default CalloutContent;
