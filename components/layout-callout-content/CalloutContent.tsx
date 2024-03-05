"use client";

import { twMerge } from "tailwind-merge";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";

interface CalloutContentProps {
  className?: string;
  content: string;
}

const CalloutContent: React.FC<CalloutContentProps> = ({
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
