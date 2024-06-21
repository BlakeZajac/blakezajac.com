"use client";

import ProjectCard, { ProjectCardProps } from "@/components/block-project-card/ProjectCard";

import Container from "@/components/layout-container/Container";
import Section from "@/components/layout-section/Section";

interface FeaturedProjectsProps {
    items: ProjectCardProps[];
}

// @todo - This is where you were last up to
const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ items }) => {
    return (
        <Section className="l-section--margin-top_none">
            <Container>
                <div className="featured-projects">
                    {items.map((item, index) => (
                        <ProjectCard
                            key={index}
                            className={index % 3 !== 0 ? "project-card--vertical" : ""}
                            {...item}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FeaturedProjects;
