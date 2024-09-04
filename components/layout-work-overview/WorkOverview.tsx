"use client";

import { twMerge } from "tailwind-merge";
import { PortableText } from "next-sanity";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";
import { Work } from "@/types/work";

interface WorkOverviewProps extends Pick<Work, "overviewTitle" | "overviewDescription"> {
    className?: string;
}

const WorkOverview: React.FC<WorkOverviewProps> = ({ className, overviewTitle, overviewDescription }) => {
    if (!overviewTitle || !overviewDescription) {
        return;
    }

    const descriptionIsArray = overviewDescription?.length > 1;

    return (
        <Section>
            <Container>
                <div className={`overview ${twMerge(className)}`}>
                    <div className="overview__title">{overviewTitle}</div>

                    {descriptionIsArray ? (
                        <div className="l-grid l-grid--spacing l-grid--vertical-gap_sm">
                            {overviewDescription.map((block, index) => (
                                <div key={index} className="l-grid__cell l-grid__cell--spacing l-grid__cell--50-at-lg">
                                    <div className="overview__description">
                                        <PortableText value={[block]} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        overviewDescription && (
                            <div className="overview__description">
                                <PortableText value={overviewDescription} />
                            </div>
                        )
                    )}
                </div>
            </Container>
        </Section>
    );
};

export default WorkOverview;
