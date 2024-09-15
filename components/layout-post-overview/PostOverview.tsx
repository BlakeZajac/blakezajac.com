"use client";

import { twMerge } from "tailwind-merge";
import { PortableText } from "next-sanity";

import { Work } from "@/types/work";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";
import RevealText from "@/components/block-reveal-text/RevealText";

interface PostOverviewProps extends Pick<Work, "overviewTitle" | "overviewDescription"> {
    className?: string;
}

const PostOverview: React.FC<PostOverviewProps> = ({ className, overviewTitle, overviewDescription }) => {
    if (!overviewTitle || !overviewDescription) {
        return;
    }

    const descriptionIsArray = overviewDescription?.length > 1;

    return (
        <Section>
            <Container>
                <div className={`overview ${twMerge(className)}`}>
                    <RevealText as="h2" className="overview__title" content={overviewTitle} />

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

export default PostOverview;
