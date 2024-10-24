"use client";

import { Journal } from "@/types/journal";
import { useJournal } from "@/hooks/use-journal";

import BackgroundCardCollection from "@/components/layout-background-card-collection/BackgroundCardCollection";
import CalloutContent from "@/components/layout-callout-content/CalloutContent";
import FeaturedContent from "@/components/layout-featured-content/FeaturedContent";
import FeaturedProjects from "@/components/layout-featured-projects/FeaturedProjects";
import Hero from "@/components/layout-hero/Hero";

import heroImage from "@/src/img/headshots/headshots-1920x1080-01.webp";
import featuredContentImage from "@/src/img/headshots/headshots-1400x1400-1.webp";

import featuredPostsData from "@/src/data/featured-posts";

export default function Home() {
  const journal: Journal[] = useJournal();

  return (
    <>
      <Hero title="Architecting Bespoke Experiences" image={heroImage} />

      <CalloutContent
        className="l-section--background_orange"
        content="Merging design, technology, and strategy to build digital products for visionary brands."
      />

      {/* <FeaturedProjects items={featuredPostsData} /> */}

      <FeaturedContent
        title="A little about me"
        content01="I'm a full stack designer and front-end developer from Australia. I find immense joy in problem solving, creating, and working on custom WordPress projects, but I try not to take myself too seriously."
        content02="I'm a lifelong learner, long-distance runner, cyclist, and inconsistent reader. I'm currently residing in Newcastle, Australia where I work for Redback Solutions as a WordPress developer."
        buttonHref="/about"
        buttonLabel="More about me"
        statisticNumber01="5"
        statisticContent01="Years crafting digital experiences"
        statisticNumber02="1"
        statisticNumberSuffix02="%"
        statisticContent02="Better every day"
        image={featuredContentImage}
      />

      <BackgroundCardCollection title="Latest" items={journal} />
    </>
  );
}
