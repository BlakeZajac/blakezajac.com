import { Work } from "@/types/work";
import { useWork } from "@/hooks/use-work";

import Hero from "@/components/layout-hero/Hero";
import FeaturedProjects from "@/components/layout-featured-projects/FeaturedProjects";

const WorkArchive = () => {
    const work: Work[] = useWork();

    return (
        <>
            <Hero className="hero--title-primary" title="Exceptional digital products for forward-thinking brands." />

            <pre>{JSON.stringify(work, null, 2)}</pre>

            <FeaturedProjects items={work} />
        </>
    );
};

export default WorkArchive;
