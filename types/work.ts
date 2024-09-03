import { PortableTextBlock } from "next-sanity";

export type Work = {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    shortDescription: string;
    liveLink: string;
    featuredImage: string;
    role: string[];
    technology: string[];
    overviewTitle: string;
    overviewDescription: PortableTextBlock[];
};
