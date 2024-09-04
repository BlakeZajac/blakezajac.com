"use client";

import { PortableTextBlock } from "next-sanity";
import { twMerge } from "tailwind-merge";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";

interface WorkOverviewProps {
    className?: string;
    title: string;
    description?: string[];
}

const WorkOverview: React.FC<WorkOverviewProps> = ({ className, title, description }) => {
    const descriptionClass =
        description && description.length > 1 ? "overview__descrtiption overview__description--two-columns" : "overview__description";

    return (
        <Section>
            <Container>
                <div className={`overview ${twMerge(className)}`}>
                    <div className="overview__title">{title}</div>
                    {description && (
                        <div className={descriptionClass}>
                            {description.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    );
};

export default WorkOverview;
