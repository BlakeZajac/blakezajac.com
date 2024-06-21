"use client";

import ProjectCard, { ProjectCardProps } from "@/components/block-project-card/ProjectCard";

import Container from "@/components/layout-container/Container";
import Section from "@/components/layout-section/Section";

interface FeaturedProjectsProps {
    items: ProjectCardProps[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ items }) => {
    return (
        <Section className="l-section--margin-top_none">
            <Container>
                <div className="l-grid l-grid--vertical-gap_sm">
                    {items.map((item, index) => (
                        <ProjectCard
                            key={index}
                            className={`l-grid__cell ${
                                index % 3 !== 0
                                    ? "project-card--vertical l-grid__cell--50-at-md"
                                    : "l-grid__cell--100"
                            }`}
                            {...item}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FeaturedProjects;
