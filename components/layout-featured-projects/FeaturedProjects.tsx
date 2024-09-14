"use client";

import { Work } from "@/types/work";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";
import ProjectCard from "@/components/block-project-card/ProjectCard";

interface FeaturedProjectsProps {
    items: Work[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ items }) => {
    const getCardImage = (item: Work) => {
        if (item.cardImage) {
            return item.cardImage;
        } else if (item.featuredImage) {
            return item.featuredImage;
        }
        return "";
    };

    return (
        <Section>
            <Container>
                <div className="l-grid l-grid--vertical-gap_sm">
                    {items.map((item, index) => (
                        <div key={item._id} className={`l-grid__cell ${index % 3 !== 0 ? "l-grid__cell--50-at-md" : "l-grid__cell--100"}`}>
                            <ProjectCard
                                className={`${index % 3 !== 0 ? "project-card--vertical" : ""}`}
                                link={`/work/${item.slug}`}
                                media={getCardImage(item)}
                                title={item.title}
                                width={1920}
                                height={1080}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FeaturedProjects;
