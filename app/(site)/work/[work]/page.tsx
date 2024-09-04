import { getWorkItem } from "@/sanity/utils/get-work";

import WorkOverview from "@/components/layout-work-overview/WorkOverview";
import PostHero from "@/components/layout-post-hero/PostHero";

type Props = {
    params: {
        work: string;
    };
};

export default async function WorkItemPage({ params }: Props) {
    const slug = params.work;
    const workItem = await getWorkItem(slug);

    const { title, shortDescription, shortDescriptionAlt, liveLink, overviewTitle, overviewDescription } = workItem;

    return (
        <>
            <PostHero title={title} shortDescription={shortDescription} shortDescriptionAlt={shortDescriptionAlt} liveLink={liveLink} />

            <WorkOverview title={overviewTitle} description={overviewDescription} />
        </>
    );
}
