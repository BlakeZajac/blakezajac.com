"use client";

import { Work } from "@/types/work";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";
import ProjectCard from "@/components/block-project-card/ProjectCard";

interface FeaturedProjectsProps {
    items: Work[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ items }) => {
    return (
        <Section>
            <Container>
                <div className="l-grid l-grid--vertical-gap_sm">
                    {items.map((item, index) => (
                        <ProjectCard
                            key={item._id}
                            className={`l-grid__cell ${index % 3 !== 0 ? "project-card--vertical l-grid__cell--50-at-md" : "l-grid__cell--100"}`}
                            link={`/work/${item.slug}`}
                            media={item.featuredImage}
                            title={item.title}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FeaturedProjects;
