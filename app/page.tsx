import BackgroundCardCollection from "@/components/layout-background-card-collection/BackgroundCardCollection";
import CalloutContent from "@/components/layout-callout-content/CalloutContent";
import FeaturedContent from "@/components/layout-featured-content/FeaturedContent";
import FeaturedProjects from "@/components/layout-featured-projects/FeaturedProjects";
import Hero from "@/components/layout-hero/Hero";

import heroImage from "../src/img/headshots/headshots-1920x1080-01.webp";

export default function Home() {
  return (
    <main className="site-main" id="main">
      <Hero title="Extraordinary Digital Experiences" image={heroImage} />
      {/* <CalloutContent />
      <FeaturedProjects />
      <FeaturedContent />
      <BackgroundCardCollection /> */}
    </main>
  );
}
