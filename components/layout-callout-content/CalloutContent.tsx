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
                <RevealText content={content} className="callout-content__content" />
            </Container>
        </Section>
    );
};

export default CalloutContent;
