"use client";

import Hero from "@/components/layout-hero/Hero";
import ImageGallery from "@/components/layout-image-gallery/ImageGallery";
import FeaturedContent from "@/components/layout-featured-content/FeaturedContent";
import ReadingList from "@/components/layout-reading-list/ReadingList";
import FullwidthMedia from "@/components/layout-fullwidth-media/FullwidthMedia";

import photographyItems from "@/src/data/photography";
import visionImage from "@/src/img/headshots/headshots-1400x1400-1.webp";
import missionImage from "@/src/img/headshots/headshots-1400x1400-1.webp";
import fullwidthImage from "@/src/img/headshots/headshots-1400x1400-1.webp";

const AboutPage = () => {
    return (
        <>
            <Hero
                className="u-bg-yellow"
                title="Blake Zajac"
                description01="Hey there! I'm an Australian full stack designer and web developer. I find immense joy in creating and enjoy working on custom WordPress projects, design systems, UI and UX design, and product design, but I try not to take myself too seriously."
                description02="I'm a lifelong learner, endurance runner, cyclist, and self-proclaimed crappy pianist. I'm currently residing in Newcastle, Australia where I work for Redback Solutions as a full stack designer."
            />

            <ImageGallery images={photographyItems} />

            <FeaturedContent
                title="Vision"
                content01="I strive to create an impactful digital landscape where every interaction leaves a lasting impression. By seamlessly blending cutting-edge UX design and accessible web development, I simplify complexities and enhance user engagement at every touchpoint."
                image={visionImage}
            />

            <FeaturedContent
                mediaPosition="left"
                title="Mission"
                content01="I don't adhere to the norm and always strive to deliver something that stands out and exceeds standards. I'm dedicated to creating user-friendly digital solutions that exceed expectations. Through UX design, I solve and transform business challenges into intuitive and functional experiences."
                content02="I believe in continuous learning and am commited to personal and professional growth, striving to improve 1% every day. With each project, I maintain a mindset of ongoing improvement, both in and out of work."
                image={missionImage}
                buttonHref="/contact"
                buttonLabel="Let's work together"
            />

            <ReadingList title="What I'm reading" />

            <FullwidthMedia image={fullwidthImage} imageAlt="Blake Zajac" />
        </>
    );
};

export default AboutPage;
