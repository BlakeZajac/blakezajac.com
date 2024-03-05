import BackgroundCardCollection from "@/components/layout-background-card-collection/BackgroundCardCollection";
import CalloutContent from "@/components/layout-callout-content/CalloutContent";
import FeaturedContent from "@/components/layout-featured-content/FeaturedContent";
import FeaturedProjects from "@/components/layout-featured-projects/FeaturedProjects";
import Hero from "@/components/layout-hero/Hero";

import heroImage from "../src/img/headshots/headshots-1920x1080-01.webp";
import featuredContentImage from "../src/img/headshots/headshots-1400x1400-1.webp";
import Waypoint from "@/components/block-waypoint/Waypoint";

export default function Home() {
  return (
    <main className="site-main" id="main">
      <Hero title="Extraordinary Digital Experiences" image={heroImage} />

      <Waypoint activeClass="theme-orange">
        <CalloutContent
          activeClass="theme-orange"
          className="l-section--background-orange"
          content="I design, develop and deliver exceptional digital products for forward-thinking brands."
        />
      </Waypoint>

      {/* <FeaturedProjects /> */}

      <FeaturedContent
        title="A little about me"
        content01="I'm a full stack designer and web developer from Australia. I find immense joy in creating and enjoy working on custom WordPress projects, design systems, and product design, but I try not to take myself too seriously."
        content02="I'm a lifelong learner, long-distance runner, and crappy pianist. I'm currently residing in Newcastle, Australia where I work for Redback Solutions as a full stack designer."
        buttonHref="/about"
        buttonLabel="More about me"
        statisticNumber01="5"
        statisticContent01="Years crafting digital experiences"
        statisticNumber02="1"
        statisticNumberSuffix02="%"
        statisticContent02="Better every day"
        image={featuredContentImage}
      />

      {/* <BackgroundCardCollection /> */}
    </main>
  );
}
