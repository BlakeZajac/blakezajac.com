"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

import Section from "../layout-section/Section";
import Container from "../layout-container/Container";

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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      document.body.classList.forEach((className) => {
        if (className.startsWith("theme-")) {
          document.body.classList.remove(className);
        }
      });
      document.body.classList.add(activeClass);
    } else {
      document.body.classList.remove(activeClass);
    }
  }, [inView, activeClass]);

  return (
    <Section className={twMerge(`callout-content`, className)}>
      <Container className="callout-content__container">
        <div className="callout-content__content">{content}</div>
      </Container>
    </Section>
  );
};

export default CalloutContent;
