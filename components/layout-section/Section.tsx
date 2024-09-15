import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
    className?: string;
    children?: React.ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ children, className }, ref) => {
    return (
        <div ref={ref} className={twMerge(className, `l-section`)}>
            {children}
        </div>
    );
});

Section.displayName = "Section";

export default Section;
