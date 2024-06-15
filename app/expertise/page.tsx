import Hero from "@/components/layout-hero/Hero";

import heroImage from "../../src/img/headshots/headshots-1920x1080-01.webp";
import Waypoint from "@/components/block-waypoint/Waypoint";

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
        </>
    );
};

export default ExpertisePage;
