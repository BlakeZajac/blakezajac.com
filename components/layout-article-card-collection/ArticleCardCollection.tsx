"use client";

import { Journal } from "@/types/journal";

import Section from "@/components/layout-section/Section";
import Container from "@/components/layout-container/Container";
import ArticleCard from "@/components/block-article-card/ArticleCard";

interface FeaturedProjectsProps {
  className?: string;
  items: Journal[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  className,
  items,
}) => {
  return (
    <Section className={`article-card-collection ${className}`}>
      <Container>
        <div className="l-grid l-grid--vertical-gap_sm">
          {items.map((item, index) => (
            <div
              key={item._id}
              className="l-grid__cell l-grid__cell--50-at-md l-grid__cell--33-at-lg l-grid__cell--25-at-xl"
            >
              <ArticleCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedProjects;
