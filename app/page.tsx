import BackgroundCardCollection from "@/components/layout-background-card-collection/BackgroundCardCollection";
import CalloutContent from "@/components/layout-callout-content/CalloutContent";
import FeaturedContent from "@/components/layout-featured-content/FeaturedContent";
import FeaturedProjects from "@/components/layout-featured-projects/FeaturedProjects";
import Hero from "@/components/layout-hero/Hero";

import logo from "../src/img/logo/logo.svg";

export default function Home() {
  return (
    <main className="site-main" id="main">
      <Hero
        badge="UX Design"
        title="Strategic foundations lead to better outcomes"
        description01="Hey there! I'm an Australian full stack designer and web developer. I find immense joy in creating and enjoy working on custom WordPress projects, design systems, UI and UX design, and product design, but I try not to take myself too seriously."
        description02="I'm a lifelong learner, long-distance runner, and self-proclaimed crappy pianist. I'm currently residing in Newcastle, Australia where I work for Redback Solutions as a full stack designer."
        image={logo}
      />
      {/* <CalloutContent />
      <FeaturedProjects />
      <FeaturedContent />
      <BackgroundCardCollection /> */}
    </main>
  );
}
