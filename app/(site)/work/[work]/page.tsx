import { getWorkItem } from "@/sanity/utils/get-work";

import PostHero from "@/components/layout-post-hero/PostHero";
import PostOverview from "@/components/layout-post-overview/PostOverview";
import PostMediaContent from "@/components/layout-post-media-content/PostMediaContent";

type Props = {
    params: {
        work: string;
    };
};

export default async function WorkItemPage({ params }: Props) {
    const slug = params.work;
    const workItem = await getWorkItem(slug);

    const { title, shortDescription, shortDescriptionAlt, liveLink, featuredImage, overviewTitle, overviewDescription } = workItem;

    return (
        <>
            {/* <PostHero
                title={title}
                shortDescription={shortDescription}
                shortDescriptionAlt={shortDescriptionAlt}
                liveLink={liveLink}
                featuredImage={featuredImage}
            /> */}

            <PostOverview overviewTitle={overviewTitle} overviewDescription={overviewDescription} />

            <PostMediaContent media="" />
        </>
    );
}
