"use client";

import Waypoint from "@/components/block-waypoint/Waypoint";
import Hero from "@/components/layout-hero/Hero";
import ImageGallery from "@/components/layout-image-gallery/ImageGallery";
import FeaturedContent from "@/components/layout-featured-content/FeaturedContent";
import ReadingList from "@/components/layout-reading-list/ReadingList";
import FullwidthMedia from "@/components/layout-fullwidth-media/FullwidthMedia";

import visionImage from "@/src/img/headshots/headshots-1400x1400-1.webp";
import missionImage from "@/src/img/headshots/headshots-1400x1400-1.webp";
import fullwidthImage from "@/src/img/headshots/headshots-1400x1400-1.webp";

const AboutPage = () => {
    return (
        <>
            <Waypoint activeClass="theme-yellow">
                <Hero
                    className="u-bg-yellow"
                    title="Blake Zajac"
                    description01="Hey there! I'm an Australian full stack designer and web developer. I find immense joy in creating and enjoy working on custom WordPress projects, design systems, UI and UX design, and product design, but I try not to take myself too seriously."
                    description02="I'm a lifelong learner, endurance runner, cyclist, and self-proclaimed crappy pianist. I'm currently residing in Newcastle, Australia where I work for Redback Solutions as a full stack designer."
                />
            </Waypoint>

            <ImageGallery />

            <Waypoint activeClass="theme-black">
                <FeaturedContent
                    title="Vision"
                    content01="I strive to create an impactful digital landscape where every interaction leaves a lasting impression. By seamlessly blending cutting-edge UX design and accessible web development, I simplify complexities and enhance user engagement at every touchpoint."
                    image={visionImage}
                />
            </Waypoint>

            <Waypoint activeClass="theme-black">
                <FeaturedContent
                    mediaPosition="left"
                    title="Mission"
                    content01="I'm committed to crafting intuitive, user-centric digital solutions that go beyond expectations. Through UX design, I unravel intricate business challenges, transforming them into user-friendly and functional experiences. My passion for web development ensures that these concepts materialise into fully responsive, dynamic applications."
                    content02="I embrace a culture of continuous learning, remaining dedicated to personal and professional growth, striving to get better at least 1% every day. With every project, I nurture a mindset of perpetual improvement, both inside and outside of work."
                    image={missionImage}
                    buttonHref="/contact"
                    buttonLabel="Let's work together"
                />
            </Waypoint>

            <ReadingList title="What I'm reading" />

            <FullwidthMedia image={fullwidthImage} imageAlt="Blake Zajac" />
        </>
    );
};

export default AboutPage;
