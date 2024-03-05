"use client";

import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

import Container from "../layout-container/Container";
import Section from "../layout-section/Section";

interface CalloutContentProps {
  activeClass?: string;
  className?: string;
  content: string;
}

const CalloutContent: React.FC<CalloutContentProps> = ({
  activeClass = "",
  className,
  content,
}) => {
  return (
    <Section className={twMerge(`callout-content`, className)}>
      <Container className="callout-content__container">
        <div className="callout-content__content">{content}</div>
      </Container>
    </Section>
  );
};

export default CalloutContent;
