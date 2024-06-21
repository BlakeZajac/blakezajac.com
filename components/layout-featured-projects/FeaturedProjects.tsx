"use client";

import FeaturedProject, { FeaturedProjectProps } from "../block-featured-project/FeaturedProject";

import Container from "../layout-container/Container";
import Section from "../layout-section/Section";

interface FeaturedProjectsProps {
    items: FeaturedProjectProps[];
}

// @todo - This is where you were last up to
const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ items }) => {
    return (
        <Section className="l-section--margin-top_none">
            <Container>
                {items.map((item, index) => (
                    <FeaturedProject key={index} {...item} />
                ))}
            </Container>
        </Section>
    );
};

export default FeaturedProjects;
