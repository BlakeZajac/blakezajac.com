import { getWorkItem } from "@/sanity/utils/get-work";

import PostHero from "@/components/layout-post-hero/PostHero";
import PostOverview from "@/components/layout-post-overview/PostOverview";
import PostMediaContent from "@/components/layout-post-media-content/PostMediaContent";
import ParallaxZoom from "@/components/layout-parallax-zoom/ParallaxZoom";
import ParallaxScroll from "@/components/layout-parallax-scroll/ParallaxScroll";

type Props = {
  params: {
    work: string;
  };
};

export default async function WorkItemPage({ params }: Props) {
  const slug = params.work;
  const workItem = await getWorkItem(slug);

  const {
    title,
    shortDescription,
    shortDescriptionAlt,
    liveLink,
    featuredImage,
    overviewTitle,
    overviewDescription,
  } = workItem;

  return (
    <>
      <ParallaxZoom />
      {/* <PostHero title={title} featuredImage={featuredImage} /> */}

      <PostOverview
        overviewTitle={overviewTitle}
        overviewDescription={overviewDescription}
      />

      <ParallaxScroll />

      {/* <PostMediaContent media="" /> */}
    </>
  );
}
