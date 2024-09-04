import { PortableTextBlock } from "next-sanity";

export type Work = {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    shortDescription: string;
    shortDescriptionAlt: string;
    liveLink: {
        title: string;
        link: string;
        openInNewTab: boolean;
    };
    featuredImage: string;
    role: string[];
    technology: string[];
    overviewTitle: string;
    overviewDescription: PortableTextBlock[];
};
