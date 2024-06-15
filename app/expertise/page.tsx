import Hero from "@/components/layout-hero/Hero";
import Waypoint from "@/components/block-waypoint/Waypoint";
import IconGrid from "@/components/layout-icon-grid/IconGrid";

import heroImage from "../../src/img/headshots/headshots-1920x1080-01.webp";

const ExpertisePage = () => {
    return (
        <>
            <Waypoint activeClass="theme-orange">
                <Hero
                    className="u-bg-orange--light"
                    badge="UX Design"
                    title="Strategic foundations lead to better outcomes"
                    image={heroImage}
                />
            </Waypoint>

            <IconGrid
                title="The key to digital success"
                description="Create a crystal clear vision for your digital product and put your customer at the heart of the solution."
                columns={4}
                items={[]}
            />
        </>
    );
};

export default ExpertisePage;
