import Hero from "@/components/layout-hero/Hero";
import Waypoint from "@/components/block-waypoint/Waypoint";
import IconGrid from "@/components/layout-icon-grid/IconGrid";
import MediaContent from "@/components/layout-media-content/MediaContent";

import heroImage from "@/src/img/headshots/headshots-1920x1080-01.webp";
import expertiseItems from "@/src/data/expertise";

const ExpertisePage = () => {
    return (
        <>
            <Waypoint activeClass="theme-orange">
                <Hero className="hero--bg-orange-light" badge="UX Design" title="Strategic foundations lead to better outcomes" image={heroImage} />
            </Waypoint>

            <IconGrid
                title="The key to digital success"
                description="Create a crystal clear vision for your digital product and put your customer at the heart of the solution."
                columns={4}
                items={expertiseItems}
            />

            <MediaContent
                media={heroImage}
                title="Reimaged user experiences"
                content="We work with forward-thinking organisations to reimagine what good looks like. From simplifying complex user journeys to improving onboarding, we've helped solve a wide array of business problems through a strategic approach to UX."
                linkUrl="#"
                linkTitle="Learn more"
            />

            <MediaContent
                mediaPosition="right"
                media={heroImage}
                title="Optimised for conversion"
                content="Utilising an analytical approach combined with our best practice methodologies, we convert interest into action. By focusing on streamlined pathways and clear calls to action, we capture user attention and drive them towards desired outcomes, be it sales, sign-ups, or engagement."
            />

            <MediaContent
                media={heroImage}
                title="Set for the future"
                content="Our digital strategies are designed to not only meet current demands but also anticipate future trends and challenges. We focus on scalability, flexibility, and innovation to keep your business at the forefront, ready to embrace new opportunities and technologies as they arise."
            />
        </>
    );
};

export default ExpertisePage;
