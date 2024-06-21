"use client";

import ProjectCard, { ProjectCardProps } from "../block-project-card/ProjectCard";

import Container from "../layout-container/Container";
import Section from "../layout-section/Section";

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
                            className={index % 3 === 0 ? "project-card--featured" : ""}
                            {...item}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FeaturedProjects;
