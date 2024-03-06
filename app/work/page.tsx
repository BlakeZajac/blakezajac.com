"use client";

import FeaturedProjects from "@/components/layout-featured-projects/FeaturedProjects";
import Hero from "@/components/layout-hero/Hero";

const WorkPage = () => {
  return (
    <>
      <Hero
        className="hero--title-primary"
        title="Exceptional digital products for forward-thinking brands."
      />

      <FeaturedProjects />
    </>
  );
};

export default WorkPage;
