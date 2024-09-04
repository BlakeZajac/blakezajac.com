"use client";

import { twMerge } from "tailwind-merge";
import { PortableText, PortableTextBlock } from "next-sanity";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";

interface WorkOverviewProps {
    className?: string;
    title?: string;
    description?: PortableTextBlock[];
}

const WorkOverview: React.FC<WorkOverviewProps> = ({ className, title, description }) => {
    if (!title || !description) {
        return;
    }

    const descriptionIsArray = description && description.length > 1;

    return (
        <Section>
            <Container>
                <div className={`overview ${twMerge(className)}`}>
                    <div className="overview__title">{title}</div>

                    {descriptionIsArray ? (
                        <div className="l-grid l-grid--spacing l-grid--vertical-gap_sm">
                            {description.map((block, index) => (
                                <div key={index} className="l-grid__cell l-grid__cell--spacing l-grid__cell--50-at-lg">
                                    <div className="overview__description">
                                        <PortableText value={[block]} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        description && (
                            <div className="overview__description">
                                <PortableText value={description} />
                            </div>
                        )
                    )}
                </div>
            </Container>
        </Section>
    );
};

export default WorkOverview;
